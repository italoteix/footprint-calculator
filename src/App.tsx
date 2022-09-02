import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <div className='App'>
          <h1>Footprint Calculator</h1>
        </div>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
