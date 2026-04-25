import { Center } from "@styles";
import { Push } from "@components";
import type { JSX } from "react";
import { Label } from "@heroui/react";

interface INothing {
   text: string;
   svg: string;
   children?: JSX.Element | JSX.Element[];
}

export const Nothing = ({ text, svg, children }: INothing) => (
   <Center>
      <Push>
         <img src={svg} width="300px" height="300px" alt="No se encontraron resultados" />
      </Push>
      <Label>{text}</Label>
      {children}
   </Center>
)