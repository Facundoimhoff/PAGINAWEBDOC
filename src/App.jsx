import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import OrthodonticsSection from "./components/OrthodonticsSection";
import CasesSection from "./components/CasesSection";
import CoursesSection from "./components/CoursesSection";
import InstagramSection from "./components/InstagramSection";
import FormSection from "./components/FormSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="inicio">
          <Hero />
        </section>

        <section id="sobre-mi">
          <AboutSection />
        </section>

        <section id="ortodoncia">
          <OrthodonticsSection />
        </section>

        <section id="casos">
          <CasesSection />
        </section>

        <section id="cursos">
          <CoursesSection />
        </section>

        <section id="instagram">
          <InstagramSection />
        </section>

        <section id="formulario">
          <FormSection />
        </section>

        <section id="contacto">
          <CTASection />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;