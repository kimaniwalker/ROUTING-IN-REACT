import React, {Component} from 'react';

const Base_URL = 'https://ghibliapi.herokuapp.com/films';


class Films extends Component {
    render() {
        return(
            <h1> This is the films page</h1>
        )
    }
    
    componentDidMount() {
        fetch(`${Base_URL}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
    }
}

export default Films;