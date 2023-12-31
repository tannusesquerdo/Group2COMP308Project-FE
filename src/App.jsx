import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import "./scss/style.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "react-toastify/dist/ReactToastify.css";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const Layout = React.lazy(() => import("./layout/Layout"));
const Public = React.lazy(() => import("./views/pages/Public"));
const Landing = React.lazy(() => import("./views/nurse/Landing"));

const Login = React.lazy(() => import("./views/pages/Login"));
const VitalSignsInputForm = React.lazy(() =>
  import("./views/nurse/VitalSignsInputForm")
);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        students: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        courses: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const link = createHttpLink({
  uri: "http://localhost:5000/graphql",
  credentials: "include",
});

const client = new ApolloClient({
  cache,
  link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={loading}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* public routes */}
              <Route index path="/" element={<Landing />} />
              <Route path="login" element={<Login />} />

              {/* Protected Routes */}
              <Route path="*" element={<DefaultLayout />} />
              {/* End Protected Routes */}
            </Route>
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </Suspense>
    </ApolloProvider>
  );
}

export default App;
