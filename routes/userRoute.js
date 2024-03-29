const express = require("express");
const{
    getAllusers,
    createUser,getUserById,updateUser,deleteUser

} =require("../controllers/userController");

const router =express.Router();

router.route("/").get( getAllusers).post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);


module.exports =router;