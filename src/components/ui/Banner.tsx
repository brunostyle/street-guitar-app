import { Image } from "@heroui/react";
import { IoLogoGithub, IoLogoInstagram } from "@icons";
import { Container, Flex, Gap, Pattern, Subtitle } from "@styles";
import { CustomButton, Logo, Push } from "@components";
import { Link } from "react-router";

export const Banner = () => (
   <Pattern mask>
      <Container className="grid gap-4 md:grid-cols-2 items-center">
         <Gap className="items-center mb-20 md:mb-52 p-4 backdrop-blur">
            <Logo big />
            <h1 className="text-center text-4xl leading-snug font-bold">
               Encontra las mejores tablaturas en
               <span className="drop-shadow-[0_0_1px_#006FEE] bg-gradient-to-bl from-blue-300 to-blue-950 bg-clip-text text-transparent leading-normal"> Street Guitar </span>
               y aprende de forma rápida
            </h1>
            <Subtitle>Tablaturas gratis, tracks, covers, etc</Subtitle>
            <Flex>
               <CustomButton color="primary" variant="flat" startContent={<IoLogoInstagram />}>Instagram</CustomButton>
               <Link to="https://github.com/brunostyle" target="_blank" >
                  <CustomButton color="primary" variant="bordered" startContent={<IoLogoGithub />}>Github</CustomButton>
               </Link>
            </Flex>
         </Gap>
         <div className="hidden md:block mb-36 dark:opacity-80">
            <Flex className="justify-center">
               <Push>
                  <Image disableSkeleton src="auris.png" alt="Ilustracion" />
               </Push>
            </Flex>
         </div>
      </Container>
   </Pattern>
)