import { heroui } from "@heroui/react";
export default heroui({
    defaultTheme: 'dark',
    layout: {
        borderWidth: {
            medium: "1px"
        },
    },
    themes: {
        light: {
            layout: {},
            colors: {},
        },
        dark: {
            layout: {},
            colors: {
                content1: "#09090b",
            },
        },
    },
});