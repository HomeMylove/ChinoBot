import express from 'express'
import {AbstractRobot, Middleware, Options, Method} from "./core/core";
import {Message} from "./core/Message";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

class Robot extends AbstractRobot {

    constructor() {
        super();
        this.app = app
        this.HELP = []
        this.app.use((req, res, next) => {
            const body = req['body']
            const message = new Message()

            message.groupId = body['group_id']
            message.rawMsg = body['raw_message']
            message.msgId = body['message_id']
            message.msgSeq = body['message_seq']
            message.msgType = body['message_type']
            message.postType = body['post_type']
            message.selfId = body['self_id']
            message.sender = body['sender']
            message.subType = body['sub_type']
            message.time = body['time']
            message.userId = body['user_id']
            message.noticeType = body['notice_type']
            message.targetId = body['target_id']
            message.senderId = body['sender_id']

            message.HELP = this.HELP

            req['messageObj'] = message

            res.send('ok') // 返回以阻止多次上报

            if (!message.groupId) {
                return
            }

            if (message.msgType || message.noticeType) {
                next()
            }
        })
    }

    common(fnName: string, fn: Function) {
        this.app.use((req, res, next) => {
            res[fnName] = fn
            next()
        })
    }

    method(method: Method, options: Options) {
        options = options || {}
        const {permitted, forbidden} = options

        this.app.use(middle(options))

        function middle(options) {
            const {permitted, forbidden, time} = options
            const inner: Middleware = (req, res, next) => {
                const {groupId} = req

                if (forbidden && forbidden.indexOf(groupId.toString()) != -1) {
                    next()
                } else if (permitted && permitted.indexOf(groupId.toString()) == -1) {
                    next()
                } else {
                    method.middleware(req, res, next)
                }
            }
            return inner
        }

        //写入帮助
        if (method.__help) {
            const h = {permitted, forbidden, description: method.__help}
            this.HELP.push(h)
        }
    }

}