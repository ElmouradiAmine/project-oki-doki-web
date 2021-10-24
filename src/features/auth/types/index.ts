export type BaseCredentialDTO = {
  email: string;
  password: string;
};

export type SignupDTO = BaseCredentialDTO;

export type LoginDTO = BaseCredentialDTO;
