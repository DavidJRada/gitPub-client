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
//     baseURL = 'http://localhost:3004'
// } else {
//     baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
// }
class UpdateFoodForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value })
        console.log(event.currentTarget.value)
    }

    handleSubmit(event) {
        event.preventDefault()//if you comment out, it edits that field and deletes the rest.
        fetch(baseURL + '/foods/' + this.props.food._id, {
            method: 'PUT',
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
            // console.log(resJSON)
            this.props.handleEditFood(resJSON)
        }).catch(error => console.error({ 'Error': error }))
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" onChange={this.handleChange} defaultValue={this.props.food.name} />

                <label htmlFor="image">Image: </label>
                <input type="text" id="image" name="image" onChange={this.handleChange} defaultValue={this.props.food.image} />


                <label htmlFor="ingredients">Ingredients: </label>
                <textarea type="text" id="ingredients" name="ingredients" onChange={this.handleChange} defaultValue={this.props.food.ingredients} />


                <label htmlFor="price">Price: </label>
                <input type="number" id="price" name="price" onChange={this.handleChange} defaultValue={this.props.food.price} />

                <input type="submit" value="Make Change" />
            </form>
        )
    }
}

export default UpdateFoodForm
