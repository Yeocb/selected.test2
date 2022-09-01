const resumesService = require("../services/resumesService");

const getResumes = async (req, res) => {
    try{
        const resumes = await resumesService.getResumes();
        res.status(200).json(resumes);
    } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
    }
  };

  const getResumesId = async (req, res) => {
    try{
        const {resumesId}= req.params;
        const ResumesId = await resumesService.getResumesId(resumesId);
        res.status(200).json(ResumesId);
    } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
    }
  };

module.exports = {
  getResumes,
  getResumesId
};
