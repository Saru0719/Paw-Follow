import axios from "./axios";

interface UserData {
  email: string;
  password: string;
}

export const registerReq = (user: UserData) => axios.post("/register", user);
export const loginReq = (user: UserData) => axios.post("/login", user);
