import { endpoint } from "@Services/endpoints";

export type ApiOptions = {
  service: endpoint,
  query?: object,
  headers?: object,
  context?: Mocha.Context,
}

export type GetApiType = ApiOptions;

export type PostApiType = ApiOptions & { payload: object };