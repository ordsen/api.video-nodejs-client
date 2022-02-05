import { Response } from 'got';
import ProblemDetails from './model/ProblemDetails';
export default class ApiVideoError extends Error {
    private problemDetails;
    private code;
    constructor(response: Response<ProblemDetails>);
}
