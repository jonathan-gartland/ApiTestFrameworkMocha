import { httpPostCall } from '@Helper/apicall';
import { performanceTime } from '@Helper/utils';
import users from '@Resources/testdata.json';
import userschema from '@Schema/user.json';
import { endpoint } from '@Services/endpoints';
import { RESPONSE } from '@Static/constants';
import { type UserPayloadType, type UserResponseType } from '@Types/user';
import ResponseAssert from '@Validation/ResponseAssert';
import { expect } from 'chai';

describe('Test ReqRes APIs', () => {
  // placeholder
  users.forEach((user: UserPayloadType) => {
    it(`should validate create user ${user.name}`, async function () {
      // @ts-expect-error
      const startTime = performanceTime();
      const response = await httpPostCall({
        service: endpoint.user,
        payload: user,
        context: this,
      });

      expect(performance.now() - startTime).to.be.lessThan(2000);
      expect(response.statusCode).to.equal(201);
      expect(response.type).to.equal('application/json');
      const { name, job, id, createdAt }: UserResponseType = response.body;

      new ResponseAssert(response)
        .timeIsLessThan(startTime, RESPONSE.TIME)
        .statusCodeIs(RESPONSE.CODE)
        .typeIs(RESPONSE.TYPE)
        .schemaIs(userschema)
        .toEqual(name, user.name)
        .toEqual(job, user.job)
        .isNotEmpty(id)
        .isNotEmpty(createdAt);
    });
  });
});
