import RootLayout from "./layouts/RootLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Lab1Page from "./pages/Lab1Page";
import HomePage from "./pages/HomePage";
import Lab2Page from "./pages/Lab2Page";
import Lab3Page from "./pages/Lab3Page";
import AppContext from "./contexts/AppContext";
import { useReducer } from "react";
import AppReducer from "./reducers/AppReducer";
import { data } from "./data/module-data";
import Lab4Page from "./pages/Lab4Page";
import CreatePersonalInfo from "./components/CreatePersonalInfo";
import EditPersonalInfo from "./components/EditPersonalInfo";

const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "Laboratorium 1",
    url: "/lab1/1",
  },
  {
    id: 3,
    label: "Laboratorium 2",
    url: "/lab2/1",
  },
  {
    id: 4,
    label: "Laboratorium 3",
    url: "/lab3",
  },
];

const pages = [
  {
    id: 1,
    urlPattern: "/",
    element: <HomePage></HomePage>,
  },
  {
    id: 2,
    urlPattern: "/lab1/:id",
    element: <Lab1Page></Lab1Page>,
  },
  {
    id: 3,
    urlPattern: "/lab2/:id",
    element: <Lab2Page></Lab2Page>,
  },
  {
    id: 4,
    urlPattern: "/lab3",
    element: <Lab3Page></Lab3Page>,
  },
  {
    id: 5,
    urlPattern: "/lab4",
    element: <Lab4Page></Lab4Page>
  },
  {
    id: 5,
    urlPattern: "/lab4/create",
    element: <CreatePersonalInfo></CreatePersonalInfo>
  },
  {
    id: 5,
    urlPattern: "/lab4/edit:id",
    element: <EditPersonalInfo></EditPersonalInfo>
  },
];

function App() {
  const [items, dispatch] = useReducer(AppReducer, data);

  return (
    <AppContext.Provider value={{ items: items, dispatch: dispatch }}>
      <RootLayout items={menuItems}>
        <Router>
          <Routes>
            {pages.map((item) => (
              <Route
                key={item.id}
                path={item.urlPattern}
                element={item.element}
              ></Route>
            ))}
            <Route path="*" element={<h1>Page not found!</h1>} />
          </Routes>
        </Router>
      </RootLayout>
    </AppContext.Provider>
  );
}

export default App;
