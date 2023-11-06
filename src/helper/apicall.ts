import { request } from "@Config/supertest";
import { logResponseToReport } from "@Helper/logger";
import { GetApiType, PostApiType } from "@Types/http";
import { Response } from "supertest";

const setObjectOrEmptyIfUndefined = (data?: object) => data ? data : {};

export const httpGetCall = async (options: GetApiType): Promise<Response> => {
  let response = await request
    .get(options.service)
    .set(setObjectOrEmptyIfUndefined(options.headers))
    .query(options.query || {})
    .set(options.headers || {})
  if (options.context) logResponseToReport(options.context, response);
  return response;
}

export const httpPostCall = async (options: PostApiType): Promise<Response> => {
  let response = await request
    .post(options.service)
    .set(setObjectOrEmptyIfUndefined(options.headers))
    .query(options.query || {})
    .set(options.headers || {})
    .send(options.payload);
  if (options.context) logResponseToReport(options.context, response);
  return response;
}