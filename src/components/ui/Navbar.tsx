import { useState, type ReactNode } from "react";
import { Collapse } from "./Collapse";
import { IoCloseOutline, IoMenuOutline } from "@icons";
import { Flex, Title } from "@styles";
import { Link } from "react-router";
import { ROUTES } from "@navigation";
import { Logo } from "./Logo";
import { CustomButtonIcon } from "@components";

interface NavbarProps {
    items: ReactNode;
}

export function Navbar({ items }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="z-40 w-full border-b border-separator bg-background sticky top-0">
            <header className="flex h-16 items-center justify-between px-6 mx-auto">
                <Flex>
                    <Link to={ROUTES.home}><Logo /></Link>
                    <Title className="hidden sm:block">Street Guitar</Title>
                </Flex>
                <Flex>
                    {items}
                    <CustomButtonIcon
                        variant="ghost"
                        onPress={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span>
                            {isMenuOpen ? <IoCloseOutline className="size-[1.8em]" /> : <IoMenuOutline className="size-[1.8em]" />}
                        </span>
                    </CustomButtonIcon>
                </Flex>
            </header>
            {isMenuOpen && <Collapse setIsMenuOpen={setIsMenuOpen} />}
        </nav>
    );
}