const { AppDataSource } = require("../models/dataSource");

const getResumes = async () => {
    try {
        return await AppDataSource.query(
        `SELECT
           r.id,
           u.name,
           DATE_FORMAT(r.updated_at, "%Y-%c-%e") as date
           FROM resumes r
           INNER JOIN users u ON r.user_id = u.id`
      );
    } catch (err) {
      const error = new Error("INVALID_DATA_INPUT");
      error.statusCode = 500;
      throw error;
    };
    }
  
const getResumesId = async (resumesId) => {
    try {
        const [resume_info] = await AppDataSource.query(`
            SELECT
            r.id,
            u.name,
            u.email,
            r.title,
            r.introduction
            FROM resumes r
            INNER JOIN users u ON r.user_id = u.id
            INNER JOIN resumes_skills rs ON rs.resumes_id = r.id
            INNER JOIN skills s ON s.id = rs.skill_id
            WHERE r.id = ${resumesId}
        `);

        const resume_skill = await AppDataSource.query(`
            SELECT
            skill
            FROM resumes r
            INNER JOIN resumes_skills rs ON rs.resumes_id = r.id
            INNER JOIN skills s ON s.id = rs.skill_id            
            WHERE r.id = ${resumesId}
        `);
              
        const portfolio_url = await AppDataSource.query(`
            SELECT
            pu.link_url
            FROM portfolio_urls pu
            INNER JOIN resumes r ON r.id = pu.resumes_id
            WHERE r.id = ${resumesId}
        `);

        const user_careers = await AppDataSource.query(`
            SELECT
            DATE_FORMAT(uc.career_start, "%Y-%c-%e") as start_date,
            DATE_FORMAT(uc.career_end, "%Y-%c-%e") as end_date,
            uc.company_name,
            uc.department
            FROM user_careers uc
            INNER JOIN resumes r ON r.id = uc.resumes_id            
            WHERE r.id = ${resumesId}
        `);

        const data = {
          resume_info,
          resume_skill,
          portfolio_url,
          user_careers
        }
        return data;

    } catch (err) {
        const error = new Error('INVALID_DATA_INPUT');
        error.statusCode = 500;
        throw error;
    }
}

  module.exports = { 
    getResumes,
    getResumesId
  };
