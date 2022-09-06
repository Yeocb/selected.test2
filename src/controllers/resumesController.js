const resumesService = require("../services/resumesService");
const authService = require("../services/authService");

const getResumes = async (req, res) => {
  const {kakaoId} = req.user;
  const resumes = await resumesService.getResumes(kakaoId);
        res.status(200).json(resumes);
  };

const getResumesId = async (req, res) => {
        const {kakaoId}= req.user;
        const ResumesId = await resumesService.getResumesId(kakaoId);
        res.status(200).json(ResumesId);
  };

const postResumesInfo = async (req, res) => {
      const {kakaoId} = req.user.kakaoId;
      const {resumesInfo} = req.body;
      resumesInfo.kakaoId = kakaoId;
      console.log(resumesInfo);

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
      res.status(200).json({"message":"ADD_USER_CAREER!"});
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
