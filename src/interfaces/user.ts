import { ChipProps } from "@nextui-org/react";

type TValidRoles = 'admin' | 'client';

export interface IUser {
   id: string;
   name: string;
   email: string;
	password?: string;
   role: TValidRoles;
   avatar?: string;
}

export const roles: Record<string, ChipProps["color"]> = {
   admin: 'warning',
   client: 'danger',
}