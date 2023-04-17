var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
function auth(req, res, next) {
  var token = req.headers.authorization;
  jwt.verify(token, process.env.secret_password, function (err, decoded) {
    if (decoded) {
      req.userId = decoded.data.userId;
      next();
    }
    if (err) {
      res.json(err);
    }
  });
}
module.exports = auth;
