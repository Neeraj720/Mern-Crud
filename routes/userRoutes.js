import express from 'express'
import * as UserController from '../controller/userController.js'
let route = express.Router()

route.post('/saveUser',UserController.saveUser)
route.get('/viewUser/:id',UserController.viewUser)
route.get('/viewAllUser',UserController.viewAllUser)
route.delete('/deleteUser/:id',UserController.deleteUser)
route.patch('/updateUser/:id',UserController.updateUser)
export default route