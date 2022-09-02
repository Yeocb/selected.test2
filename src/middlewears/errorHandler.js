const errorHandler = (asyncController) => {
    return async (req, res, next) => {
        try {
            await asyncController(req, res);
        } catch (err) {
            console.log(err.stack)
            if (err.message === "OK") {
                res.status(err.statusCode ? err.statusCode : 200).json({
                    message: err.message,
                });
            } else {
                res.status(err.statusCode ? err.statusCode : 200).json({
                    message: err.message,
                });
            }
        }
    };
};

module.exports = errorHandler;