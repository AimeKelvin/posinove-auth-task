import httpStatus from 'http-status';

export default class ApiError extends Error {
  statusCode: number;
  constructor(statusCode = httpStatus.INTERNAL_SERVER_ERROR, message = 'Internal Server Error') {
    super(message);
    this.statusCode = statusCode;
  }
}
