const resumesDao = require("../models/resumesDao");
const AppError = require("../middlewares/appError");

const getResumes = async (kakaoId) => {
    const getResumes = await resumesDao.getResumes(kakaoId);
    return getResumes;
    };

const getResumesId = async (resumesId) => {
    const getResumesId = await resumesDao.getResumesId(resumesId);   
    return getResumesId;
    };
 
const postResumesInfo = async (resumesInfo) => {
    const kakaoId = resumesInfo.kakaoId
    const title = resumesInfo.title
    const introduction = resumesInfo.introduction
    console.log(kakaoId, title,introduction)
    const resumeInfo  = await resumesDao.postResumesInfo(kakaoId, title, introduction)
    return resumeInfo;
    };

const postSkills = async (resumesSkill) => {
    for(let i=0; i<resumesSkill.length; i++){
        let resumesAddSkills = resumesSkill[Object.keys(resumesSkill)[i]];
        const skill = resumesAddSkills.skill
        const resumeId = resumesAddSkills.resumeId
    
        const postSkill  = await resumesDao.postSkills(skill,resumeId); 
        } return ;
    };

const postUrls = async (linkUrls) => {
    for(let i=0; i<linkUrls.length; i++){
        let addLinkUrls = linkUrls[Object.keys(linkUrls)[i]];
        const linkUrl = addLinkUrls.linkUrl
        const resumeId = addLinkUrls.resumeId
    
        const postUrl  = await resumesDao.postUrls(linkUrl,resumeId); 
        } return ;
    };    
     
const postUserCareers = async (userCareers) => {
    for(let i=0; i<userCareers.length; i++){
        let addUserCareers = userCareers[Object.keys(userCareers)[i]];
        const companyName = addUserCareers.companyName
        const department = addUserCareers.department
        const endDate = addUserCareers.endDate
        const startDate = addUserCareers.startDate
        const resumeId = addUserCareers.resumeId
        
        const postUserCareers  = await resumesDao.postUserCareers(companyName,department,endDate,startDate,resumeId); 
        } return ;
    }; 

const deleteResumesId = async (resumesId) => await resumesDao.deleteResumesId(resumesId);
    
module.exports = {
  getResumes,
  getResumesId,
  postResumesInfo,
  postSkills,
  postUrls,
  postUserCareers,
  deleteResumesId
};