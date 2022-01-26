  express = require("express"),
  router = express.Router();

// User Model
let userSchema = require("../models/User");

const {createUser, getUser, getUsers, updateUser, deleteUser} = require('../controllers/userController');

// CREATE User
router.post('/create-user', createUser);

// READ Users
router.get('/', getUsers)

// Get Single User
router.get('/edit-user/:id', getUser)

// Update User
router.put("/update-user/:id", updateUser)

// Delete User
router.delete("/delete-user/:id", deleteUser)

module.exports = router;
