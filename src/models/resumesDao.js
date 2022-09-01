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
        return await AppDataSource.query(
        `SELECT
            r.id,
            u.name,
            u.email,
            r.title,
            r.introduction
            FROM resumes r
            INNER JOIN users u ON r.user_id = u.id
            WHERE r.id = ${resumesId};`
      );
    } catch (err) {
      const error = new Error("INVALID_DATA_INPUT");
      error.statusCode = 500;
      throw error;
    };
    }

  module.exports = { 
    getResumes,
    getResumesId
  };