import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from "./styles/global"

function App() {
  return (
    <div data-testid="app" className="App">
      <GlobalStyle />
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
