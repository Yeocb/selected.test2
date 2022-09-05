module.exports = class AppError extends Error {
	constructor(name, httpStatusCode) {
		super(name);
	
		this.name = name;
		this.httpCode = httpStatusCode;
	
		Error.captureStackTrace(this);
	}
}