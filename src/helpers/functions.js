import { message } from "antd";
import { getFakeDb } from "./fakeDb";
import { setFakeToken } from "./fakeToken";
import { uniquePhone, uniqueUser, uniqueEmail } from "../helpers/isUnique";

const { db } = getFakeDb();

const setFakeDb = (db) => localStorage.setItem("fakeDb", JSON.stringify(db));

const success = () => message.success("Registration Complete");

export function logIn(formData, cb) {
  if (db.length === 0) {
    message.error("Wrong Email or Password");
  } else {
    const myUser = db.find((user) => user.email === formData.email);
    if (!myUser) {
      message.error("Wrong Email or Password");
    } else {
      if (formData.password === myUser.password) {
        setFakeToken(formData.email);
        cb();
      } else {
        message.error("Wrong Email or Password");
      }
    }
  }
}

export function registerNewUser(formData, cb) {
  if (db.length === 0) {
    db.push(formData);
    setFakeDb(db);
    cb();
    success();
  } else {
    if (uniqueEmail(formData.email)) {
      message.error(uniqueEmail(formData.email));
    } else if (uniqueUser(formData.userName)) {
      message.error(uniqueUser(formData.userName));
    } else if (uniquePhone(formData.phone)) {
      message.error(uniquePhone(formData.phone));
    } else {
      db.push(formData);
      setFakeDb(db);
      cb();
      success();
    }
  }
}
