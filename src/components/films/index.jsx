import React, {Component, Fragment} from 'react';


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
                       <div className="card" key={res.id}> 
                       <div className="card-header">{res.title}
                       <div className="card-body"> {res.id}
                       
                       </div>
                       </div>
                       </div>
                   ) 
                })}
            
            
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