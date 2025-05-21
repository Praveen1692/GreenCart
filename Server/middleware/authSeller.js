import jwt from "jsonwebtoken";

const authSeller = async (req, res, next) => {
  const { sellerToken } = req.cookie;
  if (!sellerToken) {
    return res.json({ success: false, message: "Not Authorized" });
  }
  try {
    const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET);
    if (tokenDecode.email === process.env.SELLER_EMAIL) {
      next();
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default authSeller;
