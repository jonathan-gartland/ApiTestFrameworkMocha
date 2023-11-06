import { expect } from 'chai';
import { createUserPayload } from 'src/resources/payload';
import userdata from "src/resources/testdata.json"
import supertest from 'supertest';

const request = supertest("https://reqres.in/api/");

describe('Test ReqRes APIs', () => {

  userdata.forEach((user: {name: string, job: string}) => {
    it(`Should validate create user ${user.name}`, async () => {
      const response = await request.post('users').send(user);
      expect(response.statusCode).to.equal(201);
      console.log(JSON.stringify(response.body));
    });
  });
})