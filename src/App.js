import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from '../src/components/menuBar';
import SettingsPage from '../src/containers/SettingsContainer';
import DatasetsPage from '../src/containers/FileUploader';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="parent">
          <div className="narrow"><MenuBar/></div>
          <div className="wide">
            <Route exact path="/" component={SettingsPage} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/datasets" component={DatasetsPage} />
          </div>
        </div>
    </div>
  </Router>
    
  );
}

export default App;
