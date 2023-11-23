import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'
import MovieList from './MovieList'

const MOVIE_KEY = process.env.REACT_APP_MOVIE_KEY;
const Browse = () => {

    const [results, setResults] = useState([])
    const [selectValue, setSelectValue] = useState('action')

    const handleChange = (e) => {
        setSelectValue(e.target.value);
    }

     const onSubmit = async() => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
              api_key: MOVIE_KEY, 
                } 
          })
          const results1 = response.data.results
          var comp = 0;
          switch(selectValue) {
            case "action":
                comp = 28;
                break;
            case "comedy":
                comp = 35;
                console.log(selectValue)
                break;
            case "romance":
                console.log(selectValue)
                comp = 10749;
                break;
            case "horror":
                comp = 27;
                break;
          }
          const results2 = results1.filter(result=> {
             return result.genre_ids.includes(comp)
          })
          setResults(results2)
        }
    return (
        <div>
            <Header loc="browse"/>
            <div class="container" >
                <div style={{textAlign: "center"}} ><h3>Browse by Genre</h3><br />
            <div style={{whiteSpace: "nowrap", display: "flex",
  justifyContent: "center",
  alignItems: "center"}}><select name="genres" id="genres"
                value={selectValue} 
                onChange={handleChange} >
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="horror">Horror</option>
             <option value="romance">Romance</option>
</select><div style={{marginLeft: 10}}>
<button class="ui primary button" onClick={onSubmit}>Submit</button> </div></div></div></div><br />
<MovieList results={results} />
        </div>
    )
        
}

export default Browse
