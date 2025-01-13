import { Navigate } from "react-router-dom";
import { useUser } from "@state";

interface Props {
    children: JSX.Element;
}

export const Public = ({ children }: Props) => {
    const { isLogged } = useUser();
    return isLogged
        ? <Navigate to="/" />
        : children
}