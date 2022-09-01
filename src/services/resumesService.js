const resumesDao = require("../models/resumesDao");

const getResumes = async () => {
  try{
    const getResumes = await resumesDao.getResumes();
    return getResumes;
   } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
    }
  };
    
module.exports = {
  getResumes
};