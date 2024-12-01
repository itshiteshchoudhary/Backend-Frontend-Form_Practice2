const userModel = require("../Models/userModel");
const jwt = require("jsonwebtoken")

const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, "hitesh choudharys secret key", {
        expiresIn: maxAge
    })
}

module.exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await userModel.create({ email, password })
        const token = createToken(user._id)

        res.cookie("jwt", token, {
            httpOnly: false,
            withCredentials: true,
            maxAge: maxAge * 1000
        })

        res.status(201).json({ user: user._id, created: true })

    } catch (error) {
        console.log("Something went wrong wile fatching user data !!", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports.login = async (req, res, next) => {}