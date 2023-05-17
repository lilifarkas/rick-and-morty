import React from "react";
import "./App.css";
import {useCharacters, useLocations} from "./Api/useData"
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import StartingPage from "./Components/LandingPage/landingPage";
import Characters from "./Components/Characters/characters";
import Locations from "./Components/Locations/locations";

function App() {

  const characters = useCharacters(2);
  const locations = useLocations(1);

  return <>

    <BrowserRouter>

        <Routes>

          <Route path="/" element={<StartingPage />}>
          </Route>

          <Route path="/characters" element={<div className="bg"> <Characters details={characters} /> </div>   }>
          </Route>

          <Route path="/locations" element={<div className="bg"><Locations details={locations} /></div>}>
          </Route>


        </Routes>

    </BrowserRouter>
  </>;
}

export default App;
