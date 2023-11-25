import supertest from "supertest";
import { env } from "process";
export const request = supertest(env.BASEURI ?? "https://reqres.in/api");
