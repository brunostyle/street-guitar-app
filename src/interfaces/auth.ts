type TValidRoles = 'admin' | 'client';

export interface IAuth {
   id: string;
   name: string;
   email: string;
   role: TValidRoles;
   avatar?: string;
}

export interface ILogin {
   email: string;
   password: string;
}

export interface IRegister {
   name: string;
   email: string;
   password: string;
}
