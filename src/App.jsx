import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Header from "./components/Header"
import Skills from "./components/Skills"


function App() {
  
  return (
    <>
     <div className="min-h-screen bg-gray-50">
      <Header />
      <About />
      <Experience />
      
     </div>
    </>
  )
}

export default App
