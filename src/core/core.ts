import express from "express";
import {NextFunction, Request, RequestParamHandler, Response} from "express-serve-static-core";


export declare abstract class AbstractRobot {
    app: express.Express
    HELP: help[]

    /**
     * 在 res 对象上绑定一些函数使得可以在任何时候调用
     * @param fnName 函数名，在调用的时候期望使用的名字
     * @param fn 函数体
     */
    common(fnName: string, fn: Function): void

    method(method: Method, options: Options): void

    listen(post: number, callback: () => void): void
}

export type help = {
    permitted: string[] | undefined, forbidden: string[]| undefined, description: string[]
}


export interface Function {

}

export type Middleware = (req: Request, res: Response, next: NextFunction) => void

export interface Method {
    middleware: Middleware
    __help?: string[]
}


export type Options = {
    permitted?: string[]
    forbidden?: string[]
    time?: number
}

