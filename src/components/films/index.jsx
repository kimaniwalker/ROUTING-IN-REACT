import React, {Component, Fragment} from 'react';

const Base_URL = 'https://ghibliapi.herokuapp.com/films';


class Films extends Component {
    render() {
        return(
            <Fragment>
            <h1> This is the films page</h1>
            
            </Fragment>
        )
    }
    
    componentDidMount() {
     fetch(`${Base_URL}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(list) {
    console.log(list);
    
  });
    }
}

export default Films;