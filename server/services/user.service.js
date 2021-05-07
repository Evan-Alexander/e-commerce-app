const { User } = require('../models/user');

const findUserByEmail = async (email) => {
  return await User.findOne({email:email})
}

const findUserById = async (_id) => {
  return await User.findById(_id);
}

const updateUserProfile = async (req) => {
  try {
    const user = await User.findOneAndUpdate(
      {_id: req.user._id },
      { $set: {...req.body.data } },
      { new: true }
    );
      return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  findUserByEmail,
  findUserById,
  updateUserProfile
}