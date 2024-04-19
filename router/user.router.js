import { Router } from "express";
import { createUser } from "../Controller/user.controller";
const route = Router()

route.route('/craeteUser').post(createUser)

export default route