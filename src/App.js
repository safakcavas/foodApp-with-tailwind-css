import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
function App() {
  return (
    <div className="bg-gray-300 w-screen h-screen"> 
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
    </div>
  );
}

export default App;
