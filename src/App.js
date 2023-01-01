import './App.css';

import Row from './Row';
import Banner from './Banner';

import requests from './requests';

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="NETFLIX ORIGINLA" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Docmentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
