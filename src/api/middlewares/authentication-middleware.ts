import jwt from "jsonwebtoken";
import "dotenv/config";
import { NextFunction, Request, Response } from "express";

function authenticate(req: Request, res: Response, next: NextFunction)
{
    const token = req.headers.authorization?.split(" ")[1];
    const secret = (process.env.JWT_SECRET as string);
    if (token == null) return res.status(401).json({ error: "Access token is required."});
    jwt.verify(token, secret, (err, user) => {
        if (err) return res.status(403).json({ error: err });
            req.body.authUser = user;
        next();
    });
}

export { authenticate };