const resumesService = require("../services/resumesService");
const authService = require("../services/authService");

const getResumes = async (req, res) => {
  //const {kakaoId} = req.kakaoId;
  //console.log(kakaoId);
        const kakaoId = '2418486226';
        const resumes = await resumesService.getResumes(kakaoId);
        res.status(200).json(resumes);
  };

const getResumesId = async (req, res) => {
        //const {kakaoId}= req.kakaoId;
        const { resumesid } = req.params;
        const kakaoId = '2418486226';
        const ResumesId = await resumesService.getResumesId(resumesid, kakaoId);
        res.status(200).json(ResumesId);
  };

const postResumesInfo = async (req, res) => {
      // const {kakaoId} = req.kakaoId;
      const kakaoId = '2418486226';
      const resumesInfo = {
        title: "여기있습니다!!!",
        introduction: "채동님 여기입니다!"
      }
      console.log(resumesInfo);
      resumesInfo.kakaoId = kakaoId;
      console.log(resumesInfo);

      await resumesService.postResumesInfo(resumesInfo);
      res.status(201).json({ message: "NEW_RESUME_CREATED!" });
  };

const postSkills = async (req, res) => {
      const { kakaoId } = req.body;
      //const { kakaoId } = req.kakaoId;
      //const { resumesSkill } req.body;
      console.log(kakaoId);
      console.log(resumesSkill);
       const resumesSkill = [
        {skillId: 1},
        {skillId: 2},
        {skillId: 5},
      ]
      
      console.log(resumesSkill);
      await resumesService.postSkills(resumesSkill, kakaoId);
      res.status(200).json({"message":"ADD_SKILL!"});
  };

const postUrls = async (req, res) => {
      const {linkUrls} = req.body;
      const {kakaoId} = '123';
      console.log(req.body);
      await resumesService.postUrls(linkUrls);
      res.status(200).json({"message":"ADD_URL!"});
  }; 

const postUserCareers = async (req, res) => {
  const {kakaoId} = '123';
      console.log(req.body);
      const { userCareers } = req.body;
      //console.log(req.body)
      await resumesService.postUserCareers(userCareers, kakaoId);
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
