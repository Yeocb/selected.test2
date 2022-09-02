const resumesDao = require("../models/resumesDao");

const getResumes = async () => {
    const getResumes = await resumesDao.getResumes();
    return getResumes;
  };

const getResumesId = async (resumesId) => {
    const getResumesId = await resumesDao.getResumesId(resumesId);   
    return getResumesId;
    };
  
module.exports = {
  getResumes,
  getResumesId
};