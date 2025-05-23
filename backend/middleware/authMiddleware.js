const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config(); 

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) return res.status(401).json({ message: 'Access Denied. No token provided.' });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.userId = verified.userId;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

module.exports = authMiddleware;
