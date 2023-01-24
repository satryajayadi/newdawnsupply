import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full  flex flex-col justify-center bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
