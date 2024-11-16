import RootLayout from "./layouts/RootLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Lab1Page from "./pages/Lab1Page";
import HomePage from "./pages/HomePage";
import Lab2Page from "./pages/Lab2Page";
import Lab3Page from "./pages/Lab3Page";

const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <HomePage></HomePage>,
  },
  {
    id: 2,
    label: "Laboratorium 1",
    url: "/lab1/1",
    urlPattern: "/lab1/:id",
    element: <Lab1Page></Lab1Page>,
  },
  {
    id: 3,
    label: "Laboratorium 2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2Page></Lab2Page>,
  },
  {
    id: 4,
    label: "Laboratorium 3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3Page></Lab3Page>,
  },
];

function App() {
  return (
    <RootLayout items={menuItems}>
      <Router>
        <Routes>
          {menuItems.map((item) => (
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
  );
}

export default App;
