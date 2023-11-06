// import { request } from "src/config/supertest";
// import { endpoint } from "src/services/endpoints";
// import { Response } from "supertest";
//
// export const postCall = async (service: endpoint, payload: object, headers?: object): Promise<Response> => {
//   if (headers) return request.post(service).set(headers);
//   return request.post(service).send(payload);
// }
//
// export const getCall = async (service: endpoint, payload?: object, headers?: object): Promise<Response> => {
//   if (payload && headers) return request.get(service).set(headers).send(payload);
//   else if (payload) return request.get(service).send(payload);
//   else return request.get(service);
// }
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