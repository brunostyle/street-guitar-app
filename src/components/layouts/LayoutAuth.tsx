import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import { Gradient, SectionSubTitle, SectionTitle } from "@styles";
import { Logo } from "@components";

interface ILayout {
   children: JSX.Element | JSX.Element[];
   title: string;
}

export const LayoutAuth = ({ children, title }: ILayout) => (
   <Gradient>
      <div className="container mx-auto px-4 grid grid-cols-2 gap-4 min-h-screen place-content-center">
         <Image disableSkeleton className="hidden md:block" src="/auris.png" alt="Ilustracion" />
         <Card className="col-span-2 md:col-span-1 bg-opacity-40">
            <CardHeader className="grid justify-center text-center">
               <Logo big />
               <SectionTitle>Street Guitar</SectionTitle>
               <SectionSubTitle>{title}</SectionSubTitle>
            </CardHeader>
            <CardBody>
               {children}
            </CardBody>
         </Card>
      </div>
   </Gradient>
)