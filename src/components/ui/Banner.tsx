import { IoLogoGithub, IoLogoInstagram, IoMusicalNotesOutline, IoPeopleOutline, IoRefreshOutline } from "@icons";
import { Container, Flex, Gap, Pattern, Subtitle } from "@styles";
import { CustomButton, CustomButtonLink, Logo, Push } from "@components";
import { Avatar, AvatarFallback, Chip, ChipLabel, Description, Label, Separator } from "@heroui/react";

export const Banner = () => (
   <Pattern mask>
      <Container className="grid gap-4 md:grid-cols-2 items-center w-[80%]">
         <Gap className="mb-20 md:mb-28 gap-6">
            <Chip variant="tertiary" color="accent" className="shadow-outset p-1.5 w-fit gap-2">
               <Logo />
               <ChipLabel>Tablaturas 100% gratis</ChipLabel>
            </Chip>
            <h1 className="text-[42px] font-bold">
               Encuentra las mejores tablaturas en
               <span className="drop-shadow-[0_0_1px_#006FEE] bg-linear-to-bl from-blue-300 to-blue-950 bg-clip-text text-transparent leading-normal"> Street Guitar </span>
            </h1>
            <Description>Accede a tablaturas, pistas, covers y más contenido <br /> para mejorar tu técnica y tocar tus canciones favoritas.</Description>
            <Flex>
               <CustomButton size="md" variant="outline" className="text-accent border-accent" icon={<IoLogoInstagram />}>Instagram</CustomButton>
               <CustomButtonLink size="md" isButtonLink to="https://github.com/brunostyle" icon={<IoLogoGithub />}>Github</CustomButtonLink>
            </Flex>
            <Flex className="hidden md:flex">
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
               <Separator orientation="vertical" />
               <Flex>
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
               <Separator orientation="vertical" />
               <Flex>
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
            </Flex>
         </Gap>
         <div className="hidden md:block mb-12">
            <Push>
               <img src="auricular.png" className="scale-125 mask" alt="Ilustracion" />
            </Push>
         </div>
      </Container>
   </Pattern>
)