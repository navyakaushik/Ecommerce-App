import { TryCatch } from "./error.js";
import ErrorHandler from "../utils/utility-class.js";
import { User } from "../models/user.js";
//middleware to make sure only admin is allowed
export const adminOnly = TryCatch(async (req, res, next) => {
    const { id } = req.query;
    if (!id)
        return next(new ErrorHandler("Please login first", 401));
    const user = await User.findById(id);
    if (!user)
        return next(new ErrorHandler("Invalid ID", 401));
    if (user.role !== "admin")
        return next(new ErrorHandler("Unauthorized access", 401));
    next();
});
