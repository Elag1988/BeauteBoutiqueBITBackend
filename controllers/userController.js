//Controller de los usuarios

const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.getAllUsers = (req, res) => {
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.createUser = (req, res) => {
  const {
    name,
    lastname,
    username,
    email,
    password,
    profileavatar,
    phonenumber,
    address,
    preferences,
  } = req.body;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      const newUser = new userModel({
        name,
        lastname,
        username,
        email,
        password: hash,
        profileavatar,
        phonenumber,
        address,
        preferences,
      });

      newUser
        .save()
        .then(() => res.status(201).json({ success: "created" }))
        .catch((err) => res.status(500).json({ error: err.message }));
    }
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const {
    name,
    lastname,
    username,
    email,
    password,
    profileavatar,
    phonenumber,
    address,
    preferences,
  } = req.body;
  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      userModel
        .findByIdAndUpdate(
          id,
          {
            name,
            lastname,
            username,
            email,
            password: hash,
            profileavatar,
            phonenumber,
            address,
            preferences,
          },
          { new: true }
        )
        .then((user) => {
          if (!user) throw new Error(`user with ID ${id} not found`);
          res.status(200).json({ user });
        })
        .catch((err) => res.status(404).json({ error: err.message }));
    }
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  userModel
    .findByIdAndDelete(id)
    .then((user) => {
      if (!user) throw new Error(`user with ID ${id} not found`);
      res.status(200).json({ message: "User deleted" });
    })
    .catch((err) => res.status(404).json({ error: err.message }));
};
