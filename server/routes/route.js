import express from 'express';
import { createTask, deleteTask, getAllTasks, loginUser, registerUser } from '../controllers/control.js';

const router=express.Router();

router.post("/create", createTask);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/delete/:_id", deleteTask);
router.get("/getAll", getAllTasks);

export default router;