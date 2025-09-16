// src/utils/ApiError.ts
export default class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;

    // Ensure prototype chain is correct for "instanceof"
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
