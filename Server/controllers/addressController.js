import Address from "../models/Address.js";

//Add Address-> : /api/address/add
export const addAddress = async (req, res) => {
  try {
    const { userId, address } = req.body;
    await Address.create({ ...address, userId });
    res.json({ success: true, message: "Address update" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//Get Address-> :/api/address/get

export const getAddress = async (req, res) => {
  try {
    const { userId } = req.body;
    const address = await Address.findById(userId);

    res.json({ success: true, address });
  } catch (error) {
    console.log(error.message);
    res.json({ success: true, message: error.message });
  }
};

