import jwt from "jsonwebtoken";

export const setUser = (user) => {
    try {
        const payload = {
            email: user.email,
            id: user._id.toString()
        }

        const options = {
            expiresIn: "1h"
        }

        const secretKey = process.env.KEY;
        const token = jwt.sign(payload, secretKey, options);
        return token;
    } catch (error) {
        console.log(err.message);
        return null;
    }

}