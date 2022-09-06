const resumesService = require("../services/resumesService");
const authService = require("../services/authService");

const getResumes = async (req, res) => {
        const userId = req.params;
        console.log(userId);
        const resumes = await resumesService.getResumes(userId);
        res.status(200).json(resumes);
  };

const getResumesId = async (req, res) => {
        const {resumesId}= req.params;
        const ResumesId = await resumesService.getResumesId(resumesId);
        res.status(200).json(ResumesId);
  };

const postResumesInfo = async (req, res) => {
      const {resumesInfo} = req.body;
      await resumesService.postResumesInfo(resumesInfo);
      res.status(201).json({ message: "NEW_RESUME_CREATED!" });
  };

const postSkills = async (req, res) => {
      const {resumesSkill} = req.body;
      await resumesService.postSkills(resumesSkill);
      res.status(200).json({"message":"ADD_SKILL!"});
  };

const postUrls = async (req, res) => {
      const {linkUrls} = req.body;
      await resumesService.postUrls(linkUrls);
      res.status(200).json({"message":"ADD_URL!"});
  }; 

const postUserCareers = async (req, res) => {
      const { userCareers } = req.body;
      await resumesService.postUserCareers(userCareers);
      res.status(200).json({"message":"ADD_USERCAREER!"});
  };   

const deleteResumesId = async (req, res) => {
  const { resumesId } = req.params;
  await resumesService.deleteResumesId(resumesId);
  res.status(201).json({ message: "RESUME_DELETED!" });
};

module.exports = {
  getResumes,
  getResumesId,
  postResumesInfo,
  postSkills,
  postUrls,
  postUserCareers,
  deleteResumesId
};
