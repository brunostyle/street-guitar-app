import { Card, CardContent, CardHeader, Label, Tab, TabIndicator, TabList, TabListContainer, TabPanel, Tabs } from "@heroui/react";
import { Container, Flex, Pattern, SectionTitle, Subtitle } from "@styles";
import { Logo } from "@components";
import { Login } from "../../app/auth/login";
import { Register } from "../../app/auth/register";
import { IoKeyOutline, IoPersonAddOutline } from "@icons";

export const LayoutAuth = () => (
   <Pattern>
      <Container className="grid grid-cols-2 gap-4 place-content-center items-center">
         <Flex className="justify-center">
            <img className="hidden md:block mask" src="/auricular.png" alt="Ilustracion" />
         </Flex>
         <Card className="col-span-2 md:col-span-1 bg-linear-to-r from-background via-surface-hover to-background border border-white/20">
            <CardHeader className="grid gap-2 justify-center text-center">
               <Logo big />
               <SectionTitle>Street Guitar</SectionTitle>
               <Subtitle>Tablaturas, tracks, covers gratis</Subtitle>
            </CardHeader>
            <CardContent>
               <Tabs>
                  <TabListContainer>
                     <TabList>
                        <Tab id="login">
                           <Flex>
                              <IoKeyOutline />
                              <Label>Inicia sesion</Label>
                           </Flex>
                           <TabIndicator className="bg-accent" />
                        </Tab>
                        <Tab id="register">
                           <Flex>
                              <IoPersonAddOutline />
                              <Label>Registrate</Label>
                           </Flex>
                           <TabIndicator className="bg-accent" />
                        </Tab>
                     </TabList>
                  </TabListContainer>
                  <TabPanel id="login">
                     <Login />
                  </TabPanel>
                  <TabPanel id="register">
                     <Register />
                  </TabPanel>
               </Tabs>
            </CardContent>
         </Card>
      </Container>
   </Pattern >
)