import './App.css';
import pokemonApi, { useGetPokemonByNameQuery } from "./services/pokemon"
import Loader from './components/loader';


function App() {
  const [data, isLoading, isError] = useGetPokemonByNameQuery

  if(isError){
    return <p>Error Landing</p>
  } 

  if(isLoading) {
    return <Loader />
  }
  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}

export default App;
