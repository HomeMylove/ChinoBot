"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    constructor() {
        this._groupId = '';
        this._rawMsg = '';
        this._msgId = '';
        this._msgSeq = '';
        this._msgType = '';
        this._postType = '';
        this._selfId = '';
        this._sender = '';
        this._subType = '';
        this._time = '';
        this._userId = '';
        this._noticeType = '';
        this._targetId = '';
        this._senderId = '';
    }
    get groupId() {
        return this._groupId;
    }
    set groupId(value) {
        this._groupId = value;
    }
    get rawMsg() {
        return this._rawMsg;
    }
    set rawMsg(value) {
        this._rawMsg = value;
    }
    get msgId() {
        return this._msgId;
    }
    set msgId(value) {
        this._msgId = value;
    }
    get msgSeq() {
        return this._msgSeq;
    }
    set msgSeq(value) {
        this._msgSeq = value;
    }
    get msgType() {
        return this._msgType;
    }
    set msgType(value) {
        this._msgType = value;
    }
    get postType() {
        return this._postType;
    }
    set postType(value) {
        this._postType = value;
    }
    get selfId() {
        return this._selfId;
    }
    set selfId(value) {
        this._selfId = value;
    }
    get sender() {
        return this._sender;
    }
    set sender(value) {
        this._sender = value;
    }
    get subType() {
        return this._subType;
    }
    set subType(value) {
        this._subType = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    get noticeType() {
        return this._noticeType;
    }
    set noticeType(value) {
        this._noticeType = value;
    }
    get targetId() {
        return this._targetId;
    }
    set targetId(value) {
        this._targetId = value;
    }
    get senderId() {
        return this._senderId;
    }
    set senderId(value) {
        this._senderId = value;
    }
    get HELP() {
        return this._HELP;
    }
    set HELP(value) {
        this._HELP = value;
    }
}
exports.Message = Message;
