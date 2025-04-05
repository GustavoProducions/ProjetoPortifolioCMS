import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { router } from './router';
import { Toaster } from './components/ui/toaster';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <HelmetProvider>
        <Toaster />
        <Helmet title="CM Manutenção Industrial &#8482;" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  );
}
