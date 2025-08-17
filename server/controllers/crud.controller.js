import { User } from "../models/user.model.js";

export const handleGetAllUsers = async (req, res) => {
    const users = await User.find();
    res.json({
        users
    })
};

export const handleGetUser = async (req, res) => {
    const { _id } = req.params
    const user = await User.findById(_id);
    res.json({
        user
    })
};