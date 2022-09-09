export interface IErrorField {
  name: string[];
  errors: string[];
  warnings: any[];
}

export interface IChangeFormState {
  oldPassword: string;
  newPassword: string;
  passwordConfirm: string;
}

export interface IErrorInfoFormState {
  values: ILoginFormState;
  errorFields: IErrorField[];
  outOfDate: boolean;
}

export interface IForgotPasswordFormState {
  username: string;
}

export interface ILoginFormState {
  username: string;
  password: string;
  remember: boolean;
}

export interface IRegisterFormState {
  username: string;
  password: string;
  passwordConfirm: string;
}
