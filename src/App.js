import React, {Component} from 'react';
import LocationList from './components/LocationList';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  render(){
    return (
      <div className="App">
        <LocationList cities={["Adeje,es", "La Habana,cu", "Artemisa,cu", "Washington,usa", "Lima,pe", "Brasilia,br"]}>
        </LocationList>
      </div>
    )
  }
}

export default App;
