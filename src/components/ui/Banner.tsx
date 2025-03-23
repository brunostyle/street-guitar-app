import { Image } from "@heroui/react";
import { BsInstagram, FaFacebookF } from "@icons";
import { Gradient, Subtitle } from "@styles";
import { CustomButton, Push } from "@components";

export const Banner = () => (
   <Gradient>
      <div className="grid gap-4 md:grid-cols-2 min-h-screen items-center">
         <div className="flex flex-col gap-4 mb-48">
            <h1 className="text-5xl leading-snug font-bold">
               Encontra las mejores tablaturas en
               <span className="drop-shadow-[0_0_1px_#006FEE] bg-gradient-to-bl from-blue-400 to-blue-950  bg-clip-text text-transparent leading-normal"> Street Guitar </span>
               y aprende de forma rápida
            </h1>
            <Subtitle>Tablaturas gratis, tracks, covers, etc</Subtitle>
            <div className="flex gap-4">
               <CustomButton color="primary" variant="flat" startContent={<FaFacebookF />}>Facebook</CustomButton>
               <CustomButton color="primary" variant="bordered" startContent={<BsInstagram />}>Instagram</CustomButton>
            </div>
         </div>
         <div className="hidden md:block mb-36 dark:opacity-80">
            <Push>
               <Image disableSkeleton src="auris.png" alt="Ilustracion" />
            </Push>
         </div>
      </div>
   </Gradient>
)