import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import Loader from './components/Loader/Loader';
import MainLayout from './screen/MainLayout/MainLayout';

const queryClient = new QueryClient();
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <MainLayout />
      </QueryClientProvider>
    </Suspense>
  )
}

export default App;