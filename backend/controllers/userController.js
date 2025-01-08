import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"
import mongoose from "mongoose"

export const signupUser = async(req, res) => {
    try{
        const {username, password, email, profilePic} = req.body

        const user = await User.findOne({$or : [{email}, {username}]})

        if(user){
            return res.status(400).json({message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            profilePic,
            password: hashedPassword,
        })

        await newUser.save()

        if(newUser) {
            const token = generateToken(newUser._id);
            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                profilePic: newUser.profilePic || '',
                token,
            })
        } else {
            res.status(400).json({
                error: "Invalid user data"
            })
        }
    } catch(err) {
        res.status(500).json({err: err.message})
        console.log('Error in signupUser', err.message)
    }
}

export const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user) {
            res.status(404).json({message: "User not found"})
        }

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!isPasswordCorrect) {
            return res.status(404).json({ error: 'Invalid username or password' })
        }

        if(user) {
            const token = generateToken(user._id);
            res.status(200).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                profilePic: user.profilePic || '',
                token,
            })
        } else {
            res.status(400).json({
                error: "Invalid user data"
            })
        }
    } catch (err) {
        res.status(500).json({err: err.message})
        console.log('Error in loginUser', err.message)
    }
}

export const logoutUser = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(400).json({ message: 'No token provided' });
        }

        res.status(200).json({ message: 'Logged out successfully' });
    } catch (err) {
        res.status(500).json({ err: err.message });
        console.log('Error in logoutUser', err.message);
    }
};

export const getUser = async(req, res) => {
    try {
        const {query} = req.params
        let user;

        if(mongoose.Types.ObjectId.isValid(query)){
            user = await User.findOne({_id: query}).select("-password").select("-updatedAt")
        } else {
            user = await User.findOne({username: query}).select("-password").select("-updatedAt")
        }

        res.status(200).json(user)

    } catch (err) {
        res.status(500).json({ err: err.message });
        console.log('Error in getUser', err.message);
    }
}

export const followUnfollow = async(req, res) => {
    try {
        const {id} = req.params

        const userToModify = await User.findById(id)
        const currentUser = await User.findById(req.user._id)

        if(id === req.user._id.toString()) return res.status(400).json({ error: "You can`t follow/unfollow yourself"}) 
    
        if(!userToModify || !currentUser) return res.status(400).json({error: "user not found"})    
    
        const isFollowing = currentUser.following.includes(id)

        if(isFollowing){
            await User.findByIdAndUpdate(req.user._id, {$pull: {following: id}})
            await User.findByIdAndUpdate(id, {$pull: {followers: req.user._id}})
            res.status(200).json({message: "user unfollowed successfully"})
        } else{
            await User.findByIdAndUpdate(req.user._id, {$push: {following: id}})
            await User.findByIdAndUpdate(id, {$push: {followers: req.user._id}})
            res.status(200).json({message: "user followed successfully"})
        }
    } catch (err) {
        res.status(500).json({ err: err.message });
        console.log('Error in followUnfollow', err.message);
    }
}