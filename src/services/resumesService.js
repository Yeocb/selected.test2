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

const getResumesId = async (resumesId) => {
  try{
    const getResumesId = await resumesDao.getResumesId(resumesId);
    return getResumesId;
    } catch (err) {
    console.log(err);
     return res.status(err.statusCode || 500).json({ message: err.message });
      }
    };
  
module.exports = {
  getResumes,
  getResumesId
};