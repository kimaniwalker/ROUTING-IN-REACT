import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'


const Base_URL = 'https://ghibliapi.herokuapp.com/films';

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

        }

    }

    render() {
        return (
            <Fragment>
                {this.state.data.map((res) => {
                    return (
                        <div className="card text-white bg-primary" key={res.id}>
                            <div className="card-header">{res.title}
                                <div className="card-body"> {res.id}

                                    <Link  className="btn btn-danger"  to={`/films/${res.id}`}>  MORE INFO </Link>


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


    buttonClick() {
        console.log('Clicked');
        
        


    }


}

export default Films;