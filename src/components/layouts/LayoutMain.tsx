import { useEffect } from "react";
import { useAuthRenew } from "@hooks";

interface ILayout {
   children: JSX.Element | JSX.Element[];
}

export const LayoutMain = ({ children }: ILayout) => {
   const { renew } = useAuthRenew();

   useEffect(() => {
      renew();
   }, []);

   return <div>{children}</div>
};
