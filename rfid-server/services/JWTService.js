/* author: @wahyuhadi */

let jwt = require('jsonwebtoken')

exports.generateToken = async (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
}

exports.decodeJWT = async (token, callback) => {
    jwt.verify(token, process.env.JWT_SECRET,  (err, decoded) => {
        if (err) {
            err.code = err.message === 'invalid signature' ? 401 : 500;
            callback(err, null);
        } else {
            callback(null, decoded);
        }
    });
}
