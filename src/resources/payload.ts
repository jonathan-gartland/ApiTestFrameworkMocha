
import { faker } from '@faker-js/faker';

export const createUserPayload = {
  "name": faker.person.firstName(),
  "job": faker.person.jobTitle()
}