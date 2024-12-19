import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import SideBar from '@components/SideBar/SideBar';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/StoreProvider';
import { OurShopProvider } from '@/contexts/OurShopProvider';
function App() {
  return (
    <StoreProvider>
      <ToastProvider>
        <SideBarProvider>
          <OurShopProvider>
            <SideBar />
            <BrowserRouter>
              <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                  {routers.map((item, index) => {
                    return (
                      <Route
                        path={item.path}
                        element={<item.component />}
                        key={index}
                      />
                    );
                  })}
                </Routes>
              </Suspense>
            </BrowserRouter>
          </OurShopProvider>
        </SideBarProvider>
      </ToastProvider>
    </StoreProvider>
  );
}

export default App;
