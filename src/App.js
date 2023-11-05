import logo from './logo.svg';
import './App.css';

import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import moviesData from './data/moviesData';

function App() {
  return (
    <div className="App">
      <h1>Movies List</h1>
      <MovieList movies={moviesData} />
    </div>
  );
}








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

export default App;
