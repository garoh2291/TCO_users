import { getFakeDb } from "../helpers/fakeDb";

const { db } = getFakeDb();

const isUnique = (key) => (value) => {
  let error;
  for (let item of db) {
    if (item[key] === value) {
      error = "error";
      break;
    }
  }
  return error ? `There is an account with the same ${key}` : undefined;
};

export const uniqueEmail = isUnique("email");
export const uniqueUser = isUnique("userName");
export const uniquePhone = isUnique("phone");
