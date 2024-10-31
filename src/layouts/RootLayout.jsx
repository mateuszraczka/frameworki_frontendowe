import Footer from "../components/Footer";
import NavBarMenu from "../components/NavBarMenu";

function RootLayout({ items, children }) {
  return (
    <div className="d-flex flex-column gap-4 min-vh-100">
      <NavBarMenu items={items}></NavBarMenu>
      <div className="p-3">
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default RootLayout;
