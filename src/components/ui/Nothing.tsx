import { Image } from "@heroui/react";
import { Center, Title } from "@styles";
import { Push } from "@components";
import type { JSX } from "react";

interface INothing {
   text: string;
   svg: string;
   children?: JSX.Element | JSX.Element[];
}

export const Nothing = ({ text, svg, children }: INothing) => (
   <Center>
      <Push>
         <Image disableSkeleton src={svg} width="300px" height="300px" alt="No se encontraron resultados" />
      </Push>
      <Title>{text}</Title>
      {children}
   </Center>
)
