import { useContext, useEffect } from "react";
import Download from "../../components/Download/Download";
import Feature from "../../components/Feature/Feature";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../contexts/AuthContext";
import About from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const {
    user: { info },
  } = useContext(AuthContext);

  useEffect(() => {}, []);

  return (
    <div>
      <Header />
      <Feature />
      <Download />
      <About />
      <Footer />
    </div>
  );
}
