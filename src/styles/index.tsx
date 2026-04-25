import { Chip as ChipHero, ChipLabel } from "@heroui/react";
import type { TValidCategory } from "@categories";
import { categories } from "@categories";
import type { TValidRoles } from "@interfaces";
import { roles } from "@interfaces";
import { IoLockClosedOutline, IoMusicalNoteSharp } from "@icons";
import type { ComponentProps, JSX } from "react";

// ------------------- CHIPS -------------------

export const ChipCuston = ({ children }: { children: JSX.Element[] }) => (
  <ChipHero className="gap-1 px-2 py-1 w-fit rounded-4xl" size="sm" variant="soft" color="accent">
    {children}
  </ChipHero>
)

export const ChipCategory = ({ children }: { children: TValidCategory }) => (
  <ChipHero className="gap-1" size="sm" variant="soft" color={categories[children]}>
    <IoMusicalNoteSharp />
    <ChipLabel>{children}</ChipLabel>
  </ChipHero>
)

export const ChipUser = ({ children }: { children: TValidRoles }) => (
  <ChipHero className="gap-1" size="sm" variant="soft" color={roles[children]}>
    <IoLockClosedOutline />
    <ChipLabel>{children}</ChipLabel>
  </ChipHero>
)

// ------------------- CONTAINERS -------------------

export const Container = ({ children, className, ...props }: ComponentProps<"div">) => (
  <div className={`container mx-auto p-4 min-h-dvh ${className}`} {...props}>{children}</div>
)

export const Pattern = ({ children, className, mask = false, ...props }: ComponentProps<"div"> & { mask?: boolean }) => (
  <div className={`w-full min-h-dvh bg-center bg-no-repeat ${mask && 'mask'} ${className}`} style={{ backgroundImage: 'url(/pattern.svg)' }} {...props}>{children}</div>
)

export const GridContainer = ({ children, className, ...props }: ComponentProps<"div">) => (
  <div className={`grid grid-cols-12 gap-4 ${className}`} {...props}>{children}</div>
)

export const Grid = ({ children, className, ...props }: ComponentProps<"div">) => (
  <div className={`col-span-12 md:col-span-6 flex flex-col gap-4 ${className}`} {...props}>{children}</div>
)

export const Between = ({ children, className, ...props }: ComponentProps<"div">) => (
  <div className={`w-full flex justify-between items-center gap-4 ${className}`} {...props}>{children}</div>
)

export const Gap = ({ children, className, ...props }: ComponentProps<"div">) => (
  <div className={`flex flex-col gap-4 ${className}`} {...props}>{children}</div>
)

export const Flex = ({ children, className, space = 'gap-4', ...props }: ComponentProps<"div"> & { space?: string }) => (
  <div className={`flex items-center ${space} ${className}`} {...props}>{children}</div>
)

export const Center = ({ children, className, ...props }: ComponentProps<"div">) => (
  <div className={`absolute left-0 top-0 w-full grid place-content-center gap-4 text-center min-h-screen ${className}`} {...props}>{children}</div>
)

export const WrapFill = ({ children, ...props }: ComponentProps<"div">) => (
  <section className="grid gap-4 wrap-fill" {...props}>{children}</section>
)

export const WrapFit = ({ children, ...props }: ComponentProps<"div">) => (
  <section className="grid gap-4 wrap-fit" {...props}>{children}</section>
)

// ------------------- TITLES -------------------

export const Title = ({ children, className, ...props }: ComponentProps<"h4">) => (
  <h4 className={`text-2xl font-medium ${className}`} {...props}>{children}</h4>
)

export const Subtitle = ({ children, className, ...props }: ComponentProps<"h4">) => (
  <h4 className={`text-xl font-medium ${className}`} {...props}>{children}</h4>
)

export const SectionTitle = ({ children, className, ...props }: ComponentProps<"h1">) => (
  <h1 className={`font-bold text-2xl ${className}`} {...props}>{children}</h1>
)

export const SectionSubTitle = ({ children, className, ...props }: ComponentProps<"h4">) => (
  <h4 className={`text-muted text-sm mb-4 ${className}`} {...props}>{children}</h4>
)

export const HiddenTitle = ({ children, className, ...props }: ComponentProps<"h4">) => (
  <div className="max-w-40 sm:max-w-max">
    <h4 className={`overflow-hidden text-ellipsis whitespace-nowrap text-sm ${className}`} {...props}>{children}</h4>
  </div>
)

export const HiddenSubtitle = ({ children, className, ...props }: ComponentProps<"h4">) => (
  <div className="max-w-40 sm:max-w-max text-muted">
    <h4 className={`overflow-hidden text-ellipsis whitespace-nowrap text-sm ${className}`} {...props}>{children}</h4>
  </div>
)

export const TitlePDF = ({ children, className, ...props }: ComponentProps<"h4">) => (
  <div className="max-w-screen-sm sm:max-w-max">
    <h4 className={`overflow-hidden text-ellipsis whitespace-nowrap text-sm ${className}`} {...props}>{children}</h4>
  </div>
)

export const Spacer = () => (
  <div className="m-4" />
)