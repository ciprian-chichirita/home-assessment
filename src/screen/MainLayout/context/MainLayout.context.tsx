import { createContext } from 'react';
import type { ProcessList } from '../../../services/resources/processes';


interface MainLayoutType {
  data: ProcessList;
}

const MainLayout = createContext<MainLayoutType | null>(null);
export default MainLayout;
