import './styles/default.scss';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AppContextProvider } from './context/AppContextProvider';
import Layout from './layout';
import NotFound from './layout/notFound';
import Search from './layout/search';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to="/search?page=1" replace />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;