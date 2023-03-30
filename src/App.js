import { BrowserRouter , Routes , Route } from "react-router-dom";

import "./App.css";

import ImcAcess from "./routes/imcRoute";
import MessageToProf from "./MessageToProf";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={
                    <div>
                        <h1> Home </h1>
                    </div>
                } />
                <Route path="/Imc" element={ <ImcAcess/> }/>
                <Route path="/ReactRouterDom" element={ <MessageToProf/> }/>
            </Routes> 
        </BrowserRouter>
    )
}

export default App;