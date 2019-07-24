
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    //get the toke from Authorization header
    const token = req.headers.authorization;
    const jwtSecret = process.env.JWT_SECRET || 'Keep it severet, keep it safe!';
    //verify the token
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                //invalid token
                res.status(401).json({ you: 'Shall not pass!' });
            } else {
                //valid token
                req.jwtToken = decodedToken; //makes the token available to the rest of the app
                next();
            }
        })
    } else {
        res.status(400).json({ message: 'no token provided' });
    }

};
