import { CustomError } from "../utils/customError";

export class AuthenticationError extends CustomError {
  public message: string;
  public statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
  serialize(): { message: string } {
    return { message: this.message };
  }
}
