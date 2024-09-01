import '../database/config.js'
import userSchemaModel from '../model/userModel.js'

export let saveUser = async (req, res, next) => {
  let userDetails = req.body
  let userList = await userSchemaModel.find()
  console.log("User List is :" + userList)
  let len = userList.length
  console.log("User List Length is :" + len)
  let _id = len == 0 ? 1 : userList[len - 1]._id + 1
  userDetails = { ...userDetails, "_id": _id }
  try {
    let userResponse = await userSchemaModel.create(userDetails)
    return res.status(201).json({ "status": true, "user": userResponse, "message": "user saved" })
  }
  catch (err) {
    return res.status(401).json({ "status": false, "message": "user not saved" })
  }

}
export let updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedUser = await userSchemaModel.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true
    });
    if (!updatedUser) {
      return res.status(404).json({ status: false, message: "User not found" })
    }
    res.status(200).json({ status: true, user: updatedUser, message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message })
  }
};

export let deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("User id is  :" + id)
    const user = await userSchemaModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

export let viewUser = async (req, res, next) => {
  let userId = req.params.id
  let user = await userSchemaModel.findById(userId)
  try {
    if (!user) {
      return res.status(401).json({ "status": false, "message": "user not found" })
    }
    return res.status(201).json({ "status": true, "user": user, "message": "user found" })
  }
  catch (err) {
    return res.status(500).json({ "status": false, "message": "somthing went wrong", err })
  }
}

export let viewAllUser = async (req, res, next) => {
  let userList = await userSchemaModel.find()
  console.log("User List is :" + userList)
  try {
    if (!userList) {
      return res.status(401).json({ "status": false, "message": "user list is empty" })
    }
    return res.status(201).json({ "status": true, "userList": userList, "message": "user list found" })
  }
  catch (err) {
    return res.status(500).json({ "status": false, "message": "somthing went wrong", err })
  }
}