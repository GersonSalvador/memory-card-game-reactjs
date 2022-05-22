import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <div data-testid="app" className="App">
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
