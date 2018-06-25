import React, {Component, Fragment} from 'react';
import FilmsList from '../filmsList';

const Base_URL = 'https://ghibliapi.herokuapp.com/films';

class Films extends Component {
        constructor(props){
            super(props);
            this.state= {
                data: [],
            }

        }

    render() {
        return(
            <Fragment>
            {this.state.data.map((res) => {
                   return (
                       <div className="card-header"> key={res.title}>
                       <div className="card-body"> key={res.id}>
                       
                       </div>
                       </div>
                   ) 
                })}
            
            <FilmsList />
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

export default Films;