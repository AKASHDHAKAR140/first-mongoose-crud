const usermodel = require("../models/signup2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "jgfjshdhgbhiyu57tugsyudhisadhjhhfhduishduasdfdgd";
const signup2 = async (req, res) => {
  //  existing  user
  // hashed password
  // user creation
  //token  generating

  const { firstname, lastname, email, password } = req.body;
  try {
    const existinguser = await usermodel.findOne({ email: email });
    if (existinguser) {
      res.status(400).json({ message: "user  found" });
    }
    console.log(password);
    const hashedpassword = await bcrypt.hash(password, 10);
    const result = await usermodel.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedpassword,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res
      .status(201)
      .json({ user: result, token: token, message: " succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong", error });
  }
};


const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existinguser = await usermodel.findOne({ email: email });
    if (!existinguser) {
      return res.status(404).send({ message: "user not found" });
    }
    const matchpassword = await bcrypt.compare(password, existinguser.password)
    if (!matchpassword) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      SECRET_KEY
    );
    return res.status(201).json({ message: "successfully", user: existinguser, token: token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = { signup2, signin };
