import { EuiThemeColorMode } from '@elastic/eui';
import React, { Suspense, useEffect, useState } from 'react';

const LightTheme = React.lazy(() => import('./Themes/LightTheme'));
const DarkTheme = React.lazy(() => import('./Themes/DarkTheme'));

export default function ThemeSelector({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<EuiThemeColorMode>("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("zoom-theme");
        if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
            setTheme(storedTheme as EuiThemeColorMode);
        }
    }, []); // Run once on mount

    return (
        <>
            <Suspense fallback={<></>}>
                {theme === "dark" ? <DarkTheme /> : <LightTheme />} 
            </Suspense>
            {children}
        </>
    );
}