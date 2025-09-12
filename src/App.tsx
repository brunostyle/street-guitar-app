import { HeroUIProvider } from '@heroui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { client } from '@query-client';
import { RouterApp } from "@routes";
import { LayoutMain, CustomToast } from '@components';
import { useTheme } from '@state';

export const App = () => {
  const { theme } = useTheme();
  return (
    <QueryClientProvider client={client}>
      <HeroUIProvider>
        <main className={`${theme} text-foreground bg-background`}>
          <LayoutMain>
            <RouterApp />
          </LayoutMain>
          <CustomToast />
        </main>
      </HeroUIProvider>
    </QueryClientProvider>
  )
}