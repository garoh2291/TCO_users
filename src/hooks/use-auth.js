import { getFakeToken } from "../helpers/fakeToken";

export function useAuth() {
  return {
    isAuth: !!getFakeToken(),
  };
}
