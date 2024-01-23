import Home from "./pages/home.jsx";
import('./style/reset.css');
import('./style/App.css');
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./pages/profile.jsx";

export default function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>}/>
      
     </Routes>  
      </BrowserRouter>
  );
}

