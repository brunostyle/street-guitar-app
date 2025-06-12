import { Card, CardBody, CardHeader, Image, Tab, Tabs } from "@heroui/react";
import { Container, Pattern, SectionTitle } from "@styles";
import { Logo } from "@components";
import Login from "../../app/auth/login";
import Register from "../../app/auth/register";
import { IoKeyOutline, IoPersonAddOutline } from "@icons";
import { Key, useState } from "react";

export const LayoutAuth = () => {
   const [selected, setSelected] = useState("sign-in");
   return (
      <Pattern>
         <Container className="grid grid-cols-2 gap-4 place-content-center items-center">
            <div className="flex justify-center items-center">
               <Image disableSkeleton className="hidden md:block" src="/auris.png" alt="Ilustracion" />
            </div>
            <Card className="col-span-2 md:col-span-1 bg-gradient-to-r from-background via-default-50 to-background border border-white/20">
               <CardHeader className="grid justify-center text-center">
                  <Logo big />
                  <SectionTitle>Street Guitar</SectionTitle>
                  <h3 className="text-gray-500 text-sm">Tablaturas, tracks, covers gratis</h3>
               </CardHeader>
               <CardBody>
                  <Tabs fullWidth size="sm" variant="bordered" color="primary" selectedKey={selected} onSelectionChange={(key: Key) => setSelected(String(key))}>
                     <Tab key="sign-in" title={<div className="flex items-center gap-2"><IoKeyOutline /><span>Inicia sesion</span></div>}>
                        <Login />
                     </Tab>
                     <Tab key="sign-up" title={<div className="flex items-center gap-2"><IoPersonAddOutline /><span>Registrate</span></div>}>
                        <Register />
                     </Tab>
                  </Tabs>
               </CardBody>
            </Card>
         </Container>
      </Pattern>
   )
}