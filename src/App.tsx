import { QueryClientProvider } from '@tanstack/react-query';
import { client } from '@query-client';
import { RouterApp } from "@routes";
import { LayoutMain, CustomToast } from '@components';
import { useTheme } from '@state';
import { BrowserRouter } from 'react-router';
import { useEffect } from 'react';

export const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);

    html.classList.remove("light", "dark");
    html.classList.add(theme);
  }, [theme])

  return (
    <main className="text-foreground bg-background">
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <LayoutMain>
            <RouterApp />
          </LayoutMain>
          <CustomToast />
        </QueryClientProvider>
      </BrowserRouter>
    </main>
  )
}