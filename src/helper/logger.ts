import addContext from "mochawesome/addContext";
import type supertest from "supertest";

const formatResponse = (response: supertest.Response): string => {
  return `Response: ${JSON.stringify(response.body, null, 4)}`;
};

export const logResponseToReport = (
  context: Mocha.Context | undefined,
  response: supertest.Response
): void => {
  // @ts-expect-error
  addContext(context, formatResponse(response));
};
