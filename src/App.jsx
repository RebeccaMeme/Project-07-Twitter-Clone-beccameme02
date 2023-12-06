import Home from "./pages/home.jsx";
import RigntSidebar from "./components/rignt-sidebar.jsx"; 
import Layout from "./components/layout.jsx";
import LeftSidebar from "./components/left-sidebar.jsx";
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
     <LeftSidebar/> 
      <Home />
      <RigntSidebar/>

    </Layout>
  );
}
