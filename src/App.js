import Hero from './components/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App h-[100vh] relative">
     <Hero/>
     <About/>
     <Projects/>
    </div>
  );
}

export default App;
