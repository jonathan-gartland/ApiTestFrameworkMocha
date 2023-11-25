import { performanceTime } from '@Helper/utils';
import { expect, use } from 'chai';
import { type Response } from 'supertest';
// eslint-disable-next-line @typescript-eslint/no-var-requires
use(require('chai-json-schema'));

export default class ResponseAssert {
  constructor(private readonly response: Response) {
    this.response = response;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  timeIsLessThan(start: any, expectedTime: number) {
    // @ts-expect-error  error
    expect(performanceTime() - start).to.be.lessThan(expectedTime);
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  statusCodeIs(code: number) {
    expect(this.response.status).to.equal(code);
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  typeIs(type: string) {
    expect(this.response.type).to.equal(type);
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  schemaIs(schema: unknown) {
    expect(this.response.body).to.be.jsonSchema(schema);
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  toEqual(expected: string | number, actual: string | number) {
    expect(expected).equal(actual);
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  isNotEmpty(value: string | number) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(value).is.not.empty;
    return this;
  }
}
