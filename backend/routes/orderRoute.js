import express from "express"
import {userOrders,placeOrder,placeOrderRazo,allOrders,updateState, placeOrderStripe, varifyStripe} from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js"


const orderRouter = express.Router()

//admin features
orderRouter.post("/list",adminAuth,allOrders)
orderRouter.post("/status",adminAuth,updateState)

//Payment
orderRouter.post("/place",authUser,placeOrder)
orderRouter.post("/stripe",authUser,placeOrderStripe)
orderRouter.post("/razorpay",authUser,placeOrderRazo)

//User
orderRouter.post("/userorders",authUser,userOrders)


//varify payment

orderRouter.post("/verifyStripe",authUser,varifyStripe)

export default orderRouter

