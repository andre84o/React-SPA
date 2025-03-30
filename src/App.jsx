import { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <>
     <Header onNavigate={setCurrentPage} currentPage={currentPage} 
      title={currentPage === "home" ? "React SPA" :                                                              
      currentPage === "about" ? "About Us" :
      currentPage === "contact" ? "Contact":""
  } />
     <Main currentPage={currentPage} />
     <Footer />
    </>
  )
}

export default App
