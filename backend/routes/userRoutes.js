const router = express.Router()
import express from 'express'
import { authUser } from '../controllers/userController.js'

router.post('/login', authUser)

export default router
