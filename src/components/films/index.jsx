import React, {Component, Fragment} from 'react';
import FilmsList from '../filmsList';



class Films extends Component {
    render() {
        return(
            <Fragment>
            <h1> This is the films page</h1>
            
            </Fragment>
        )
    }
    
    componentDidMount() {
    <FilmsList />
    }
}

export default Films;