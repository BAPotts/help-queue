import React from "react";
import Header from "./Header.js";
import TicketControl from "./TicketControl.js";

function App(){
  return(
    <React.Fragment>
      <Header />
      <TicketControl />
      <hr/>
    </React.Fragment>
  );
}

export default App;