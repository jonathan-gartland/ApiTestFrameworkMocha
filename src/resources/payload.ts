import { faker } from "@faker-js/faker";

export const createUserPayload: object = {
  name: faker.person.firstName(),
  job: faker.person.jobTitle(),
};
