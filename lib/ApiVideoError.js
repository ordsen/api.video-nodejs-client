"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiVideoError extends Error {
    constructor(response) {
        const { statusCode, body: problemDetails } = response;
        super(problemDetails.title);
        this.problemDetails = problemDetails;
        this.code = statusCode;
        this.stack = new Error().stack;
    }
}
exports.default = ApiVideoError;
