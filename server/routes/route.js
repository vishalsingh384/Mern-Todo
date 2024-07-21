import express from 'express';
import { createTask, deleteTask, getAllTasks, loginUser, registerUser, forgotPass, resetPass } from '../controllers/control.js';

const router=express.Router();

router.post("/create", createTask);
router.post("/register", registerUser);
router.post("/forgot-password", forgotPass);
router.post("/reset-password/:token", resetPass);
router.post("/login", loginUser);
router.delete("/delete/:_id", deleteTask);
router.get("/getAll", getAllTasks);

export default router;