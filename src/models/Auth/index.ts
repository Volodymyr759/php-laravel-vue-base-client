export interface IAuthUser {
  user: IUser;
  token: string;
}

export interface IChangePasswordDto {
  oldPassword: string;
  newPassword: string;
  passwordConfirm: string;
}

export interface IForgotPasswordDto {
  email: string;
}

export interface ILoginDto {
  username: string;
  password: string;
  remember: boolean;
}

export interface IRegisterDto {
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
}
