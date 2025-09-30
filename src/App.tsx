import './index.css'
import Navbar from './components/Navbar/Navbar'
import Welcome from './components/Welcome/Welcome'
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] w-full my-0 mx-auto min-h-screen h-screen snap-y snap-mandatory overflow-y-scroll'>

      <Navbar />
      <main>
        <Welcome />
        <Technologies />
        <Projects />
      </main>

    </div>
  )
}

export default App
