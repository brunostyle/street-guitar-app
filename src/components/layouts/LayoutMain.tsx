import { useEffect, type JSX } from "react";
import { useAuthRenew } from "@hooks";

interface ILayout {
   children: JSX.Element | JSX.Element[];
}

export const LayoutMain = ({ children }: ILayout) => {
   const { renew } = useAuthRenew();
   const token = localStorage.getItem('token');
   useEffect(() => {
      if (token) {
         renew();
      }
   }, []);

   return <div>{children}</div>
};