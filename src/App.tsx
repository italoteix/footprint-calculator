import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './Routes';
import theme from './theme';
import './theme/styles.css';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <AppRoutes />
        </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
