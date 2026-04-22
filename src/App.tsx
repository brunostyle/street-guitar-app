import { QueryClientProvider } from '@tanstack/react-query';
import { client } from '@query-client';
import { RouterApp } from "@routes";
import { LayoutMain, CustomToast } from '@components';
import { BrowserRouter } from 'react-router';

export const App = () => (
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