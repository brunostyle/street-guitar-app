import { Navigate } from "react-router-dom";
import { useUser } from "@state";
import { ROUTES } from "@navigation";

interface Props {
    children: JSX.Element;
}

export const Private = ({ children }: Props) => {
    const { isLogged, user } = useUser();
    return isLogged && user?.role === 'admin'
        ? children
        : <Navigate to={ROUTES.home} />
}