import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/customError';

function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
   
    if (err.name === "ValidationError") {
        return res.status(400).json({ success: false, message: 'Validation error' });
    }

    if (err instanceof CustomError) {
        return res.status(err.status).json({ success: false, message: err.message });
    } 
    
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
    
}
export default errorHandler