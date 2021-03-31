import '../App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            name: String
        };
        this.readAll = this.readAll.bind(this);
        this.readAll();
    }
    readAll(e) {
        fetch("http://localhost:5000/shopping/getAll")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({
                    results: response
                })
                console.log(this.state.results[0].name)
            })
            .catch(err => {
                console.log(err);
            });

    }

    render() {

        return (
            <div className="home-page">
                {
                    this.state.results.map((itm, k) => {
                        return (
                            <Link style={{ textDecoration: 'none' }} to={itm.name}>
                                <div class="card">
                                    <img src={itm.image} alt="Avatar" />
                                    <div class="container">
                                        <h4><b>{itm.name}</b></h4>
                                    </div>
                                </div>
                            </Link>
                        )

                    })
                }

            </div>
        );
    }
}

export default HomePage;