// import { request } from '@Config/supertest';
// import { logResponseToReport } from '@Helper/logger';
// import { type GetApiType, type PostApiType } from '@Types/http';
// import { type Response } from 'supertest';
// // TS2345: Argument of type object is not assignable to parameter of type IncomingHttpHeaders
// // Index signature for type string is missing in type {
//
// const setObjectOrEmptyIfUndefined: any = (data?: object) => data ?? {};
//
// // export const httpGetCall: unknown = async (
// //   options: GetApiType | unknown
// // ): Promise<Response> => {
// //   const response = await request
// //     .get(options.service)
// //     .set(setObjectOrEmptyIfUndefined(options.headers))
// //     .query(options.query ?? {})
// //     .set(options.headers ?? {});
// //   if (options.context !== null) logResponseToReport(options.context, response);
// //   return response;
// // };
// //
// // export const httpPostCall = async (options: PostApiType): Promise<Response> => {
// //   const response = await request
// //     .post(options.service)
// //     .set(setObjectOrEmptyIfUndefined(options.headers))
// //     .query(options.query ?? {})
// //     .set(options.headers ?? {})
// //     .send(options.payload);
// //   // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
// //   if (options.context) logResponseToReport(options.context, response);
// //   return response;
// // };
