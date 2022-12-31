import './App.css';

import Row from './Row';

import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINLA" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
