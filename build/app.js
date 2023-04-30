"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const core_1 = require("./core/core");
const Message_1 = require("./core/Message");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
class Robot extends core_1.AbstractRobot {
    constructor() {
        super();
        this.app = app;
        this.HELP = [];
        this.app.use((req, res, next) => {
            const body = req['body'];
            const message = new Message_1.Message();
            message.groupId = body['group_id'];
            message.rawMsg = body['raw_message'];
            message.msgId = body['message_id'];
            message.msgSeq = body['message_seq'];
            message.msgType = body['message_type'];
            message.postType = body['post_type'];
            message.selfId = body['self_id'];
            message.sender = body['sender'];
            message.subType = body['sub_type'];
            message.time = body['time'];
            message.userId = body['user_id'];
            message.noticeType = body['notice_type'];
            message.targetId = body['target_id'];
            message.senderId = body['sender_id'];
            message.HELP = this.HELP;
            req['messageObj'] = message;
            res.send('ok'); // 返回以阻止多次上报
            if (!message.groupId) {
                return;
            }
            if (message.msgType || message.noticeType) {
                next();
            }
        });
    }
    common(fnName, fn) {
        this.app.use((req, res, next) => {
            res[fnName] = fn;
            next();
        });
    }
    method(method, options) {
        options = options || {};
        const { permitted, forbidden } = options;
        this.app.use(middle(options));
        function middle(options) {
            const { permitted, forbidden, time } = options;
            const inner = (req, res, next) => {
                const { groupId } = req;
                if (forbidden && forbidden.indexOf(groupId.toString()) != -1) {
                    next();
                }
                else if (permitted && permitted.indexOf(groupId.toString()) == -1) {
                    next();
                }
                else {
                    method.middleware(req, res, next);
                }
            };
            return inner;
        }
        //写入帮助
        if (method.__help) {
            const h = { permitted, forbidden, description: method.__help };
            this.HELP.push(h);
        }
    }
}
