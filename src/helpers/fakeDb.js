export const getFakeDb = () => {
  const fakeDb = localStorage.getItem("fakeDb");
  if (!fakeDb) {
    return {
      db: [],
    };
  }
  return { db: JSON.parse(localStorage.getItem("fakeDb")) };
};
