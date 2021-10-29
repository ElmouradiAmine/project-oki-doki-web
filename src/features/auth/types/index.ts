export type BaseCredentialDTO = {
  email: string;
  password: string;
};

export type SignupDTO = BaseCredentialDTO;

export type LoginDTO = BaseCredentialDTO;

export enum AuthTypes {
  GOOGLE_AUTH = 'GOOGLE_AUTH',
  STANDARD_AUTH = 'STANDARD_AUTH',
}
export type LoginProps = {
  type: AuthTypes;
  payload?: LoginDTO;
};
