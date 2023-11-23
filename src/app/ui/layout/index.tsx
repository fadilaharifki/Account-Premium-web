import Footer from "../footer";
import Header, { HeaderProps } from "../header";

interface LayoutProps {
  children?: React.ReactNode;
  header?: HeaderProps;
}

const Layout: React.FC<LayoutProps> = ({ children, header }) => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <div className="flex min-h-screen w-5/6 flex-col">
        <div>
          <Header backBtn={header?.backBtn} title={header?.title} nextBtn={header?.nextBtn} />
        </div>
        <div className="flex justify-center">
          <div className="w-11/12 py-10 pb-96">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
