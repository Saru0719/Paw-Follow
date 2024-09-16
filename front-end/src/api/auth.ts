import axios from "./axios";

interface UserData {
  email: string;
  password: string;
}

interface UserRegister{
  name: string;
  lastname: string;
  email: string;
  password: string;
  cellphone: string;
}

export const loginReq = (userLogin: UserData) => axios.post("/login", userLogin);
export const registerReq = (userRegister: UserRegister) => axios.post("/register", userRegister);
