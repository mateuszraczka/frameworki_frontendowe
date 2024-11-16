import Footer from "../components/Footer";
import NavBarMenu from "../components/NavBarMenu";

function RootLayout({ items, children }) {
  return (
    <div className="d-flex flex-column gap-4 min-vh-100">
      <NavBarMenu items={items}></NavBarMenu>
      <main className="p-3">
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default RootLayout;
