import { IoLogoGithub, IoLogoInstagram, IoMusicalNotesOutline, IoPeopleOutline, IoRefreshOutline } from "@icons";
import { ChipCuston, Container, Flex, Gap, Pattern, Subtitle } from "@styles";
import { CustomButton, CustomButtonLink, Logo, Push } from "@components";
import { Avatar, AvatarFallback, Card, ChipLabel, Description, Label, Separator } from "@heroui/react";

export const Banner = () => (
   <Pattern mask>
      <Container className="grid gap-4 md:grid-cols-2 items-center w-[80%]">
         <Gap className="mb-20 md:mb-28 gap-6">
            <ChipCuston>
               <Logo />
               <ChipLabel>Tablaturas 100% gratis</ChipLabel>
            </ChipCuston>
            <h1 className="text-[42px] font-bold">
               Encuentra las mejores tablaturas en
               <span className="drop-shadow-[0_0_1px_#006FEE] bg-linear-to-bl from-blue-300 to-blue-950 bg-clip-text text-transparent leading-normal"> Street Guitar </span>
            </h1>
            <Description className="text-lg">Accede a tablaturas, pistas, covers y más contenido <br /> para mejorar tu técnica y tocar tus canciones favoritas.</Description>
            <Flex>
               <CustomButton size="md" variant="outline" className="text-accent border-accent" icon={<IoLogoInstagram />}>Instagram</CustomButton>
               <CustomButtonLink size="md" isButtonLink to="https://github.com/brunostyle" icon={<IoLogoGithub />}>Github</CustomButtonLink>
            </Flex>
            <Card className="grid grid-cols-1 xl:grid-cols-3 p-3 shadow-outset backdrop-blur-xs bg-transparent">
               <Flex>
                  <Avatar color="accent" variant="soft" className="shadow-outset">
                     <AvatarFallback>
                        <IoMusicalNotesOutline size="1.5em" />
                     </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                     <Label>+100</Label>
                     <Subtitle>Tablaturas</Subtitle>
                  </div>
               </Flex>
               <Flex>
               <Separator className="hidden xl:block" orientation="vertical" />
                  <Avatar color="accent" variant="soft" className="shadow-outset">
                     <AvatarFallback>
                        <IoPeopleOutline size="1.5em" />
                     </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                     <Label>+1000</Label>
                     <Subtitle>Usuarios</Subtitle>
                  </div>
               </Flex>
               <Flex>
               <Separator className="hidden xl:block" orientation="vertical" />
                  <Avatar color="accent" variant="soft" className="shadow-outset">
                     <AvatarFallback>
                        <IoRefreshOutline size="1.5em" />
                     </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                     <Label>Actualizaciones</Label>
                     <Subtitle>Constantes</Subtitle>
                  </div>
               </Flex>
            </Card>
         </Gap>
         <div className="hidden md:block mb-12">
            <Push>
               <img src="auricular.png" className="scale-125 mask" alt="Ilustracion" />
            </Push>
         </div>
      </Container>
   </Pattern>
)