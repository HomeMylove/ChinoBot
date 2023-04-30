import {help} from "./core";

export class Message{
    private _groupId = ''
    private _rawMsg = ''
    private _msgId = ''
    private _msgSeq = ''
    private _msgType = ''
    private _postType = ''
    private _selfId = ''
    private _sender = ''
    private _subType = ''
    private _time = ''
    private _userId = ''
    private _noticeType = ''
    private _targetId = ''
    private _senderId = ''
    private _HELP: help[]

    constructor() {

    }

    get groupId(): string {
        return this._groupId;
    }

    set groupId(value: string) {
        this._groupId = value;
    }

    get rawMsg(): string {
        return this._rawMsg;
    }

    set rawMsg(value: string) {
        this._rawMsg = value;
    }

    get msgId(): string {
        return this._msgId;
    }

    set msgId(value: string) {
        this._msgId = value;
    }

    get msgSeq(): string {
        return this._msgSeq;
    }

    set msgSeq(value: string) {
        this._msgSeq = value;
    }

    get msgType(): string {
        return this._msgType;
    }

    set msgType(value: string) {
        this._msgType = value;
    }

    get postType(): string {
        return this._postType;
    }

    set postType(value: string) {
        this._postType = value;
    }

    get selfId(): string {
        return this._selfId;
    }

    set selfId(value: string) {
        this._selfId = value;
    }

    get sender(): string {
        return this._sender;
    }

    set sender(value: string) {
        this._sender = value;
    }

    get subType(): string {
        return this._subType;
    }

    set subType(value: string) {
        this._subType = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get noticeType(): string {
        return this._noticeType;
    }

    set noticeType(value: string) {
        this._noticeType = value;
    }

    get targetId(): string {
        return this._targetId;
    }

    set targetId(value: string) {
        this._targetId = value;
    }

    get senderId(): string {
        return this._senderId;
    }

    set senderId(value: string) {
        this._senderId = value;
    }

    get HELP(): help[] {
        return this._HELP;
    }

    set HELP(value: help[]) {
        this._HELP = value;
    }
}