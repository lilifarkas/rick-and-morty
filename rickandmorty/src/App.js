import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import StartingPage from "./components/StartingPage/startingPage";
import Characters from "./components/Characters/characters";
import Locations from "./components/Locations/locations";

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
