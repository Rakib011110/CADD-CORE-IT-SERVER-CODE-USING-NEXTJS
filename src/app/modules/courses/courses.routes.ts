import express from "express";
import { CourseControllers } from "./courses.controller";

const router = express.Router();

router.post("/create-course", CourseControllers.createCourse);
router.get("/", CourseControllers.getAllCourses);
router.get("/:id", CourseControllers.getACourse);
router.delete("/:id", CourseControllers.deleteCourse);
router.put("/:id", CourseControllers.updateCourse);

export const CourseRoutes = router;
