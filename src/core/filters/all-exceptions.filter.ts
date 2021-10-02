import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpStatus, Logger } from "@nestjs/common";
import { UserBusinessErrors } from "src/shared/errors/users/user.business-errors";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {

        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();

        const errorResponse = {
            statusCode: exception.status || 500,
            timestamp: new Date().toLocaleDateString(),
            path: request.url,
            method: request.method,
            message: exception.message.error || exception.message
        }

        //standart NestJS 500 Internal Server Error
        if(JSON.stringify(exception) === "{}") {
            errorResponse.message = UserBusinessErrors.ServerError;
        }

        Logger.log(JSON.stringify(exception));

        // catch SQL errors
        if(exception.sqlMessage) {
            // duplicate entry errno 1062
            if(exception.errno == 1062) {
               errorResponse.statusCode = HttpStatus.BAD_REQUEST;
               errorResponse.message = UserBusinessErrors.DuplicateEntry;
            } else {
                errorResponse.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
                errorResponse.message = UserBusinessErrors.DatabaseError;
            }
        }
       
        response.status(errorResponse.statusCode).json(errorResponse);
    }

}