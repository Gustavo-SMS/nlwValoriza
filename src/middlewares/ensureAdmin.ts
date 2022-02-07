import { Request, Response, NextFunction, response } from "express";


export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const admin = true

    if(admin) {
        return next()
    }

    return response.status(401).json({
        error: "Unauthorized"
    })
}