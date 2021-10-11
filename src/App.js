import './App.css';
import FilmBox from './containers/FilmBox';

function App() {
  return (
    <div id='container'>
    <FilmBox />
    <hr/>
    <div id="button">
    <button><a href='https://www.imdb.com/calendar/?region=gb'>View more upcoming releases >> </a></button>
    </div>
    </div>
  );
}

export default App;
