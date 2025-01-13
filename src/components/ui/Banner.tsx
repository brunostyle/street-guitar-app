import { Button, Image } from "@nextui-org/react";
import { BsInstagram, FaFacebookF } from "@icons";
import { Gradient, Subtitle } from "@styles";
import { Push } from "@components";

export const Banner = () => (
   <Gradient>
      <div className="grid gap-4 md:grid-cols-2 min-h-screen items-center ">
         <div className="flex flex-col gap-4 mb-48">
            <h1 className="text-5xl leading-snug font-bold">
               Encontra las mejores tablaturas en
               <span className="bg-gradient-to-bl from-blue-400 to-blue-950  bg-clip-text text-transparent leading-normal"> Street Guitar </span>
               y aprende de forma rápida
            </h1>
            <Subtitle>Tablaturas gratis, tracks, covers, etc</Subtitle>
            <div className="flex gap-4">
               <Button color="primary" size="sm" startContent={<FaFacebookF />}>Facebook</Button>
               <Button color="primary" size="sm" as="a" variant="bordered" startContent={<BsInstagram />} href="" target="_blank">Instagram</Button>
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