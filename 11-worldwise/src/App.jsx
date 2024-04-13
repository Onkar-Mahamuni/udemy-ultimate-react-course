import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";

// Before lazy loading
// dist/index.html                   0.49 kB │ gzip:   0.32 kB
// dist/assets/index-ejA9GSMT.css   29.89 kB │ gzip:   5.05 kB
// dist/assets/index-99tJnNGi.js   513.44 kB │ gzip: 147.52 kB

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// After lazy loading
// dist/index.html                           0.49 kB │ gzip:   0.32 kB
// dist/assets/Logo-C5FiXW-Q.css             0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-DIN6eNa3.css            0.35 kB │ gzip:   0.22 kB
// dist/assets/Product-CTbCq7n9.css          0.47 kB │ gzip:   0.27 kB
// dist/assets/Homepage-DWeKnO4N.css         0.50 kB │ gzip:   0.29 kB
// dist/assets/PageNav-DEaVLmCH.css          0.51 kB │ gzip:   0.28 kB
// dist/assets/AppLayout-CXWSQueJ.css        1.91 kB │ gzip:   0.70 kB
// dist/assets/index-I3wKjLxO.css           26.24 kB │ gzip:   4.37 kB
// dist/assets/Product.module-zuSBWum0.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-MGpvZrYK.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-DHgSDwLs.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-B7qVjJXG.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-qGOjyYlh.js           0.65 kB │ gzip:   0.42 kB
// dist/assets/Homepage-Dsq10sHL.js          0.67 kB │ gzip:   0.42 kB
// dist/assets/Product-CnvUFRvH.js           0.86 kB │ gzip:   0.49 kB
// dist/assets/Login-DVbgiGi-.js             1.02 kB │ gzip:   0.54 kB
// dist/assets/AppLayout-DgK0a1LS.js       156.94 kB │ gzip:  46.10 kB
// dist/assets/index-D_xMsdHK.js           355.05 kB │ gzip: 101.21 kB

function App() {
  return (
    // If we add any component here before route, it will get executed
    // for every route above the content of selected route
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
                // All routes which needs to be protected are inside app layout, hence we can protect it here itself
              >
                <Route index element={<Navigate replace to="cities" />} />
                {/* index route is for default element */}
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
