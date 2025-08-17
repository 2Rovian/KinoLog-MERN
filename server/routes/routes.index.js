import { Router } from "express";
import { User } from "../models/user.model.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { handleLogin, handleRegister } from "../controllers/auth.controller.js";
import { handleGetAllUsers, handleGetUser } from "../controllers/crud.controller.js";
import { AuthorizeJWT } from "../auth.middleware.js";

const router = Router();

router.get("/api/users", handleGetAllUsers)

router.get("/api/users/:_id", AuthorizeJWT, handleGetUser)

router.post("/api/auth/register", handleRegister)

router.post("/api/auth/login", handleLogin)

router.post("/api/auth/logout", () => {})

export default router;