import { Chip as ChipNext } from "@heroui/react";
import { categories, roles } from "@interfaces";
import { IoLockClosedOutline, IoMusicalNotesSharp } from "@icons";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const ChipCategory = ({ children }: { children: string }) => (
  <ChipNext className="gap-1" startContent={<IoMusicalNotesSharp />} size="sm" variant="flat" color={categories[children]}>{children}</ChipNext>
)

export const ChipUser = ({ children }: { children: string }) => (
  <ChipNext className="gap-1" startContent={<IoLockClosedOutline />} size="sm" variant="flat" color={roles[children]}>{children}</ChipNext>
)

export const Wrap = ({ children }: Props) => (
  <section className="wrap">{children}</section>
)

export const WrapFit = ({ children }: Props) => (
  <section className="wrap-fit">{children}</section>
)

export const Between = ({ children }: Props) => (
  <div className="w-full flex justify-between items-center gap-4">{children}</div>
)

export const SectionTitle = ({ children }: Props) => (
  <h1 className="font-bold text-2xl">{children}</h1>
)

export const SectionSubTitle = ({ children }: Props) => (
  <h4 className="text-gray-500 text-sm mb-4">{children}</h4>
)

export const Title = ({ children }: Props) => (
  <h4 className="text-base font-medium">{children}</h4>
)

export const Subtitle = ({ children }: Props) => (
  <div className="max-w-screen-sm sm:max-w-max text-gray-500">
    <h4 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">{children}</h4>
  </div>
)

export const TitlePDF = ({ children }: Props) => (
  <div className="max-w-screen-sm sm:max-w-max">
    <h4 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">{children}</h4>
  </div>
)

export const HiddenTitle = ({ children }: Props) => (
  <div className="max-w-40 sm:max-w-max">
    <h4 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">{children}</h4>
  </div>
)

export const HiddenSubtitle = ({ children }: Props) => (
  <div className="max-w-40 sm:max-w-max text-gray-500">
    <h4 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">{children}</h4>
  </div>
)

export const GridContainer = ({ children }: Props) => (
  <div className="grid grid-cols-12 gap-4">{children}</div>
)

export const Grid = ({ children }: Props) => (
  <div className="col-span-12 sm:col-span-6 flex flex-col gap-4">{children}</div>
)

export const Center = ({ children }: Props) => (
  <div className="absolute left-0 top-0 w-full grid place-content-center gap-4 text-center min-h-screen">{children}</div>
)

export const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`container mx-auto p-4 min-h-screen ${className}`}>{children}</div>
)