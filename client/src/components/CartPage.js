import '../App.css';
import { Component } from 'react';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.readCart = this.readCart.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.readCart();

  }
  removeItem = (e) => {
    this.deleteOne(e);
    this.deleteOne(e);
    this.readCart();
    window.location.reload(false);
  }
  clearCart = (e) => {
    this.deleteAll(e);
    this.deleteAll(e);
    this.readCart();
    window.location.reload(false);
  }

  readCart(e) {
    fetch("http://localhost:5000/shopping/getCart")
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({
          results: response
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
  deleteOne(e) {
    fetch("http://localhost:5000/shopping/delete", {
      "method": "DELETE",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        "_id": this.state.results[e]._id,
      })
    })
      .then(response => response.json())
      .then(response => {
        // console.log(response)

      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteAll(e) {
    fetch("http://localhost:5000/shopping/deleteAll", {
      "method": "DELETE",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      }
    })
  }

  render() {
    return (
      <div>
        <h1>You have ordered:</h1>
        {
          this.state.results.map((itm, k) => {
            return (
              <div class="card-pizza">
                <div>
                  <h2>{itm.name}</h2>
                  <p class="price-pizza">Rs.{itm.price}</p>
                  <p className="description">{itm.description}</p>
                  <p><button className="button-order" onClick={() => { this.removeItem(k) }}>Remove</button></p>
                </div>
                <div><img src={itm.image} alt="Denim Jeans" /></div>
              </div>
            )

          })
        }
        <p><button className="button-order" onClick={() => { this.clearCart() }}>Place Order</button></p>

      </div>
    );
  }
}

export default CartPage;