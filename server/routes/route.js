import express from 'express';
import { createTask, deleteTask, getAllTasks } from '../controllers/control.js';

const router=express.Router();

router.post("/create", createTask);
router.delete("/delete/:_id", deleteTask);
router.get("/getAll", getAllTasks);

export default router;