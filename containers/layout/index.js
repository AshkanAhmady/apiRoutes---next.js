import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen w-full flex flex-col items-center">
      <Header />
      <div className="flex-1 w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
