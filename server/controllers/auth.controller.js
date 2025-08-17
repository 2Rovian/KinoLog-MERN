import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const handleRegister = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ username })

        if (existingUser) {
            const error = new Error('User already exist')
            error.statusCode = 409
            throw error
        }

        const saltBcrypt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(password, saltBcrypt)

        const newUser = await User.create({ username, email, password: hashedPassword })

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
        res.cookie('auth-cookie', token, { maxAge: 900000, httpOnly: true })

        res.status(201).json({
            msg: "Usuário criado com sucesso",
            data: {
                token,
                user: newUser
            }
        })

    } catch (error) {
        console.error("Erro ao criar usuário", error)
        res.status(500).json({ msg: "Erro ao criar usuário", error: error.message });

    }
}

export const handleLogin = async (req, res) => {

    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username })

        if (!user) {
            const error = new Error("User not found")
            error.statusCode = 404
            throw error
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            const error = new Error("Invalid Password")
            error.statusCode = 401
            throw error
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
        res.cookie('auth-cookie', token, { maxAge: 900000, httpOnly: true })

        res.status(200).json({
            msg: "Usuário logado com sucesso",
            data: {
                token,
                user
            }
        })
    } catch (error) {
        next(error)
    }
}

export const handleLogout = (req, res) => {
    res.clearCookie("auth-cookie", {
        httpOnly: true,
        sameSite: "strict",
    });
    res.status(200).json({ msg: "Logout realizado com sucesso" });
}

