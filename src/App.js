import  ReactDOM from "react-dom";
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Topbar from "./MyComponents/Topbar";
import Menubara from "./MyComponents/Menubara";
import Navbar from "./MyComponents/Navbar";
import Footer from "./MyComponents/Footer";








function App() {
let no = "1-1-234-5678";


    return (<div>
<Topbar/> 
<Menubara/>
<Navbar no={no} /> 
<Footer/>

    </div> )
}
export default App;