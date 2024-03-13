import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import WelcomingPage from "./WelcomingPage";
import RecipesPage from "./RecipesPage";
import Navbar from "./Navbar";
import RecipesDetail from "./RecipesDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/welcomingpage" element={<WelcomingPage/>}/>
          <Route path="/recipes" element={<RecipesPage/>}/>
          <Route path="/recipes/:recipeId" element={<RecipesDetail/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
