// User Model
const userSchema = require("../models/User");

const createUser = ((req, res, next) => {
    userSchema.create(req.body, (error, data) => {
        if (error) {
          return next(error);
        } else {
          console.log(data);
          res.json(data);
        }
      });
})

const getUser = ((req, res, next) => {
    userSchema.findById(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      });
})

const getUsers = ((req, res, next) => {
    userSchema.find((error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      });
})

const updateUser = ((req, res, next) => {
    userSchema.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        (error, data) => {
          if (error) {
            return next(error);
            console.log(error);
          } else {
            res.json(data);
            console.log("User updated successfully !");
          }
        }
      );
})

const deleteUser = ((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data,
          });
        }
      });
})

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}