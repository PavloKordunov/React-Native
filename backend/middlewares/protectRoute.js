import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

export const protectRoute = async(req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]

        console.log(token)

        if(!token) return res.status(401).json({message: "Unauthorized"})

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        
        const user = await User.findById(decode.id).select("-password")

        if (!user) {
            return res.status(401).json({ message: "User not found or unauthorized" });
        }

        req.user = user

        next()
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log('Error in repUser', error.message)
    }
}