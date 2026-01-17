import express from "express"

import { addtoCart,getUserCart,updateCart } from "../controllers/cartController.js"
import authUser from "../middleware/auth.js"

const cartRouter = express.Router()

cartRouter.post("/add",authUser,addtoCart)
cartRouter.post("/get",authUser,getUserCart)
cartRouter.post("/update",authUser,updateCart)


export default cartRouter