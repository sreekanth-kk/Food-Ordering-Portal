import '../App.css';
import { Component } from 'react';

class SubBurger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            subresults: []
        };
        this.readAll = this.readAll.bind(this);
        this.create = this.create.bind(this);
        this.readAll();
    }
    addCart = (e) => {
        this.create(e);
        window.location.reload(false);
    }

    create(e) {
        // e.preventDefault();
        fetch("http://localhost:5000/shopping/add", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                "name": this.state.results[e].name,
                "image": this.state.results[e].image,
                "price": this.state.results[e].price,
                "description": this.state.results[e].description
            })
        })
            .then(response => response.json())
            .then(response => {
                // console.log(response)) 
            })
            .catch(err => {
                console.log(err);
            });
    }

    readAll(e) {
        fetch("http://localhost:5000/shopping/getAll")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({
                    results: response[1].subItemsData.subItems
                })
                console.log(this.state.results[0].name)
            })
            .catch(err => {
                console.log(err);
            });

    }
    render() {
        return (
            <div>
                <h1>Tasty Burgers</h1>
                {
                    this.state.results.map((itm, k) => {
                        return (
                            <div class="card-pizza">
                                <div>
                                    <h2>{itm.name}</h2>
                                    <p class="price-pizza">Rs.{itm.price}</p>
                                    <p className="description">{itm.description}</p>
                                    <p><button className="button-order" onClick={() => { this.addCart(k) }}>Order Now</button></p>
                                </div>
                                <div><img src={itm.image} alt="Denim Jeans" /></div>
                            </div>
                        )

                    })
                }
            </div>
        );
    }
}

export default SubBurger;