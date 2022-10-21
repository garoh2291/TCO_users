export const getFakeToken = () => {
  return JSON.parse(localStorage.getItem("fakeToken"));
};

export const setFakeToken = (email) => {
  localStorage.setItem("fakeToken", JSON.stringify(email));
};
