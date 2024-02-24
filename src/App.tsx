import {
  Authenticated,
  GitHubBanner,
  WelcomePage,
  Refine,
} from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';

import { useNotificationProvider } from '@refinedev/antd';
import '@refinedev/antd/dist/reset.css';

// import dataProvider, {
//   GraphQLClient,
//   liveProvider,
// } from '@refinedev/nestjs-query';

import { App as AntdApp } from 'antd';
import { Layout } from './components/layout';
import { BrowserRouter, Route, Outlet, Routes } from 'react-router-dom';
import { authProvider, dataProvider, liveProvider } from './providers';
import { Home, ForgotPassword, Login, Register } from './pages';
import routerProvider, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import { resources } from './config/resources';

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              routerProvider={routerProvider}
              dataProvider={dataProvider}
              liveProvider={liveProvider}
              notificationProvider={useNotificationProvider}
              authProvider={authProvider}
              resources={resources}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                liveMode: 'auto',
                useNewQueryKeys: true,
              }}
            >
              <Routes>
                {/* <Route index element={<WelcomePage />} /> */}
                
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                  element={
                    <Authenticated
                      key="authenticated-auth"
                      // fallback={<Outlet />}
                      // fallback={<>fallback component</>}
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <Layout>
                        <Outlet />
                      </Layout>
                    </Authenticated>
                  }>
                  <Route index element={<Home />} />
                </Route>
              </Routes>
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
