import '../App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class PageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            count: Number
        };
        this.readCart = this.readCart.bind(this);
        this.readCart();


    }
    readCart(e) {
        fetch("http://localhost:5000/shopping/getCart")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({
                    results: response
                })

                this.setState({
                    count: this.state.results.length
                })
            })
            .catch(err => {
                console.log(err);
            });

    }

    render() {
        return (
            <header className="header">
                <Link to="/" style={{ textDecoration: 'none' }}><div className="heading">Food Ordering Portal</div></Link>
                <div className="item-count">{this.state.count}</div>
                <Link to="/cart">
                    <div><img src="https://icon-library.net/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg" alt="" /></div>
                </Link>
            </header>
        );
    }

}

export default PageHeader;