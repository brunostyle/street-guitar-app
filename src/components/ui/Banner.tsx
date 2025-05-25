import { Image } from "@heroui/react";
import { FaInstagram, FaFacebookF } from "@icons";
import { Container, Subtitle } from "@styles";
import { CustomButton, Logo, Push } from "@components";

export const Banner = () => (
   <div className="pattern mask">
      <Container className="grid gap-4 md:grid-cols-2 items-center">
         <div className="flex flex-col items-center gap-4 mb-20 md:mb-52 p-4 backdrop-blur-3xl border-y-1.5 dark:border-slate-900">
            <Logo big />
            <h1 className="text-center text-4xl leading-snug font-bold">
               Encontra las mejores tablaturas en
               <span className="drop-shadow-[0_0_1px_#006FEE] bg-gradient-to-bl from-blue-300 to-blue-950  bg-clip-text text-transparent leading-normal"> Street Guitar </span>
               y aprende de forma rápida
            </h1>
            <Subtitle>Tablaturas gratis, tracks, covers, etc</Subtitle>
            <div className="flex gap-4">
               <CustomButton color="primary" variant="flat" startContent={<FaFacebookF />}>Facebook</CustomButton>
               <CustomButton color="primary" variant="bordered" startContent={<FaInstagram />}>Instagram</CustomButton>
            </div>
         </div>
         <div className="hidden md:block mb-36 dark:opacity-80">
            <div className="flex justify-center items-center">
               <Push>
                  <Image disableSkeleton src="auris.png" alt="Ilustracion" />
               </Push>
            </div>
         </div>
      </Container>
   </div>
)