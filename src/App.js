import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  };

  // async await 를 통해, axios가 끝날때까지 기다리게 한다. 
  getMovies = async() => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state; 
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
