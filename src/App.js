import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App h-[100vh] relative">
     <Hero/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
