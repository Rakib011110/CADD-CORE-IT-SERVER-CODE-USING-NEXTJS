import express from "express";
import {  UserControllers } from "./user.controller";

const router = express.Router();


router.post(
    '/create-user',
   
    UserControllers.createUsers
  );

export const UserRoutes= router;
