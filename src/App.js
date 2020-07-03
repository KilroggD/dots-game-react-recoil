import React from "react";
import { RecoilRoot } from "recoil";

import Game from './game/Game';

import './App.css';

function App() {
    return (
      <RecoilRoot>
          <Game />
      </RecoilRoot>
  );
}

export default App;
