import { Navigate } from "react-router";
import type { JSX } from "react";
import { useUser } from "@state";
import { ROUTES } from "@navigation";

interface Props {
    children: JSX.Element;
}

export const Public = ({ children }: Props) => {
    const { isLogged } = useUser();
    return isLogged
        ? <Navigate to={ROUTES.home} />
        : children
}