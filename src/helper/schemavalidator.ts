// @ts-expect-error explain why here
import { validate } from 'jsonschema';
import { type Response } from 'supertest';

/**
 * Custom implementation of json schema validation that return true or throw filtered meaningful error
 */
export const checkResponseSchema = (
  response: Response,
  schema: object
): boolean => {
  const responseResult = validate(response.body, schema).valid;
  if (responseResult === true) return responseResult;
  else {
    const errorMessages = validate(response.body, schema).errors.filter(
      (error: { message: string }) => error.message
    );
    throw Error(`Failed to validate schema:  ${errorMessages}`);
  }
};
