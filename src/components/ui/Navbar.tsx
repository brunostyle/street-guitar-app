import { useState, type JSX } from "react";
import { Collapse } from "./Collapse";
import { IoCloseOutline, IoMenuOutline } from "@icons";
import { Between, Flex } from "@styles";
import { Link } from "react-router";
import { ROUTES } from "@navigation";
import { Logo } from "./Logo";
import { CustomButtonIcon } from "@components";
import { Label } from "@heroui/react";

interface NavbarProps {
    children: JSX.Element | JSX.Element[];
}

export function Navbar({ children }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="z-40 w-full border-b border-separator bg-background sticky top-0">
            <Between className="p-3 px-6">
                <Flex>
                    <Link to={ROUTES.home}><Logo /></Link>
                    <Label className="hidden sm:block text-lg">Street <span className="text-accent">Guitar</span></Label>
                </Flex>
                <Flex>
                    {children}
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
            </Between>
            {isMenuOpen && <Collapse setIsMenuOpen={setIsMenuOpen} />}
        </nav>
    );
}