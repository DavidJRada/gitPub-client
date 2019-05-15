import React from 'react'

let baseURL = process.env.REACT_APP_BASEURL

// alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3004'
} else {
    baseURL = 'https://gitpub-backend.herokuapp.com'
}

console.log('current base URL:', baseURL)

//alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3004'
// } else {
//   baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
// }
class NewFoodForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foods: [],
            name: '',
            image: '',
            ingredients: '',
            price: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(baseURL + '/foods', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                image: this.state.image,
                ingredients: this.state.ingredients,
                price: this.state.price
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(resJSON => {
            this.props.handleAddFood(resJSON)
            this.setState({
                name: '',
                image: '',
                ingredients: '',
                price: 0
            })
        }).catch(error => console.error({ 'Error': error }))
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} />

                <label htmlFor="image">Image: </label>
                <input type="text" id="image" name="image" onChange={this.handleChange} value={this.state.image} />


                <label htmlFor="ingredients">Ingredients: </label>
                <textarea type="text" id="ingredients" name="ingredients" onChange={this.handleChange} value={this.state.ingredients}  />


                <label htmlFor="price">Price: </label>
                <input type="number" id="price" name="price" onChange={this.handleChange} value={this.state.price}  />

                <input type="submit" value="Add a Food" />
            </form>
        )
    }
}

export default NewFoodForm
