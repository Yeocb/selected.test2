const { AppDataSource } = require("../models/dataSource");

const getResumes = async () => {
    try {
        return await AppDataSource.query(
        `SELECT
            r.id,
            u.name,
            r.updated_at
            FROM resumes r
            INNER JOIN users u ON r.user_id = u.id`
      );
    } catch (err) {
      const error = new Error("INVALID_DATA_INPUT");
      error.statusCode = 500;
      throw error;
    };
    }
    
  module.exports = { 
    getResumes
  };