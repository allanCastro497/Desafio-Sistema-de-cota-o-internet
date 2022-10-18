import {React, Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return(
      <div className="App">
        <Header />
        <Form />
        <Footer />
      </div>
    )
  }

}

export default App;
