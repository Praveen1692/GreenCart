import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized" });
  }
  try {
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("tokendecode", tokendecode);

    if (tokendecode.id) {
      req.body.userId = tokendecode.id;
    } else {
      return res.json({ success: false, message: "Not Authorized" });
    }
    next();
  } catch (error) {
    req.json({ success: false, message: error.message });
  }
};
