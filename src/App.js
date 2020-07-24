import React, {Component} from 'react';
// import LocationList from './components/LocationList';
// import logo from './logo.svg';
import './App.css';
// import { Grid } from '@material-ui/core';
// import {Row, Col} from 'react-bootstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';

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

  handleSelectedLocation = city =>{
    console.log(`handleSelectedLocation ${city}`);
  }

  render(){
    return (
        <Grid fluid>
          <Row>
            <h1>Grid System: xs, sm, md, lg</h1>
          </Row>
          <Row>
            <h5> Las columnas se muestran en la misma fila mientras sumen 12 </h5>
          </Row>
          <Row around="xs">
            <Col xs={2}>
              <div className="green"></div>
            </Col>
            <Col xs={2}>
              <div className="red"></div>
            </Col>
            <Col xs={2}>
              <div className="blue"></div>
            </Col>
            <Col xs={2}>
              <div className="yellow"></div>
            </Col>
          </Row>
        </Grid>

        // <div className="App">
        //   <LocationList 
        //     cities={["Adeje,es", "La Habana,cu", "Artemisa,cu", "Washington,usa", "Lima,pe", "Brasilia,br"]} 
        //     onSelectedLocation={this.handleSelectedLocation}>
        //   </LocationList>
        // </div>
        
    )
  }
}

export default App;
