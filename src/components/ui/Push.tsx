import { motion, type Variants } from 'framer-motion';
import type { JSX } from 'react';

const containerVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'tween',
        }
    },
    exit: {
        opacity: 0,
        scale: 0,
        transition: {
            type: 'tween',
        }
    }
}

interface Props {
    children: JSX.Element;
}

export const Push = ({ children }: Props) => (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
        {children}
    </motion.div>
)