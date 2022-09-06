const jwt = require("jsonwebtoken");

const secretKey = process.env.TOKEN_SECRET;

const validateToken = async (req, res, next) => {

  try {
    const token = await req.header("Authorization");
    const token1 = String(JSON.parse(token))
    //console.log(token1)

    const decoded = await jwt.verify(token1, secretKey);
    //console.log(decoded)

    const kakaoId = decoded.kakaoId
   // console.log("kakaoId", kakaoId)

    req.user = decoded;
    console.log(req.user);

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "INVALID_TOKEN" });
  }
};

module.exports = {
  validateToken,
};