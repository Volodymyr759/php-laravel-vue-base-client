import { IAuthUser } from "@/models/Auth";
import { ILoginDto } from "@/models/Auth";
import { IRegisterDto } from "@/models/Auth";
import axios from "axios";
import authHeader from "./authHeader";

export async function loginAxios(loginDto: ILoginDto): Promise<IAuthUser> {
  return (await axios.post<IAuthUser>("/login", { ...loginDto } )).data;
}

export async function logoutAxios(): Promise<string> {
  return (await axios.post<string>("/logout", null, { headers: authHeader() })).data;
}

export async function registerAxios(registerDto: IRegisterDto): Promise<IAuthUser> {
  return (await axios.post<IAuthUser>("/login", { ...registerDto } )).data;
}