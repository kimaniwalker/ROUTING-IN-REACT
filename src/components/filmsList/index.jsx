import React, {Component, Fragment} from 'react';

const Base_URL = 'https://ghibliapi.herokuapp.com/films';


class FilmsList extends Component {
            constructor(props){
                super(props);
                
               

                
                
            }



    render() {
        return(
            <Fragment>
                
            <h1> This is the films page</h1>
            
            </Fragment>
        )
    }
    
    componentDidMount() {
    fetch(`${Base_URL}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    this.setState({
        data: res
    });
    
  });

  
    }
}

export default FilmsList;