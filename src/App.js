import { Fragment } from "react";
import { publicRouter } from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./component/Layout";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRouter.map((router, idx) => {
            let Layout = DefaultLayout;
            if (router.layout) {
              Layout = router.layout;
            } else if (router.layout === null) {
              Layout = Fragment;
            }
            const Page = router.component;
            return (
              <Route
                key={idx}
                path={router.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
