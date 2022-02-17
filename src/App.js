
import styled from "styled-components";
import Header from "./components/Header";
import AllPages from "./pages/AllPages";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./pages/About";



function App() {

  return (
    <ContainerBar>
    
    <Router>
      <Header />
      <Switch>
      
      <Route exact path = "/" component={AllPages} />

      <Route exact path="/about" component={About} />
    </Switch>
    
    </Router>
    </ContainerBar>
  );
}

export default App;

const ContainerBar = styled.main`
  height: 100vh;

`
