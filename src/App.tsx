import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import Loader from './components/Loader/Loader';
import MainLayout from './screen/MainLayout/MainLayout';
import { ModalProvider } from './components/Modal/context/Modal.provider';
import Modal from './components/Modal/Modal';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 30, //30 seconds
    },
  },
});

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <MainLayout />
          <Modal />
        </ModalProvider>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App;