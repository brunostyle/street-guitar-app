import { Card, CardBody, CardHeader, Image, Tab, Tabs } from "@heroui/react";
import { Container, Flex, Pattern, SectionTitle, Subtitle } from "@styles";
import { Logo } from "@components";
import Login from "../../app/auth/login";
import Register from "../../app/auth/register";
import { IoKeyOutline, IoPersonAddOutline } from "@icons";
import { ROUTES } from "@navigation";
import { useState } from "react";
import type { Key } from "react";

export const LayoutAuth = () => {
   const [selected, setSelected] = useState(ROUTES.login);
   return (
      <Pattern>
         <Container className="grid grid-cols-2 gap-4 place-content-center items-center">
            <Flex className="justify-center">
               <Image disableSkeleton className="hidden md:block" src="/auris.png" alt="Ilustracion" />
            </Flex>
            <Card className="col-span-2 md:col-span-1 bg-gradient-to-r from-background via-default-50 to-background border border-white/20">
               <CardHeader className="grid gap-2 justify-center text-center">
                  <Logo big />
                  <SectionTitle>Street Guitar</SectionTitle>
                  <Subtitle>Tablaturas, tracks, covers gratis</Subtitle>
               </CardHeader>
               <CardBody>
                  <Tabs fullWidth size="sm" variant="bordered" color="primary" selectedKey={selected} onSelectionChange={(key: Key) => setSelected(String(key))}>
                     <Tab key={ROUTES.login} title={<Flex space="gap-2"><IoKeyOutline /><p>Inicia sesion</p></Flex>}>
                        <Login />
                     </Tab>
                     <Tab key={ROUTES.register} title={<Flex space="gap-2"><IoPersonAddOutline /><p>Registrate</p></Flex>}>
                        <Register />
                     </Tab>
                  </Tabs>
               </CardBody>
            </Card>
         </Container>
      </Pattern >
   )
}