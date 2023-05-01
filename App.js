import {dummy} from './movieDummy';
import Movie from './components/Movie';


function App() {
  return (
    <div>
      <div className='app-container'>
        {
          dummy.results.map((item)=>{
            return(
              <Movie 
              title={item.title}
              vote_average={item.vote_average}
              poster_path = {item.poster_path}
              />
            )
          })
        }
      </div>
      
    </div>
  );
}

export default App;
