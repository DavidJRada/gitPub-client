import React from 'react'
import NewForm from './NewForm'


let baseURL = process.env.REACT_APP_BASEURL

// alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3004'
} else {
    baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}


class Drinks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drinks: [],
        }
        this.getDrinks = this.getDrinks.bind(this)
        this.handleAddDrink = this.handleAddDrink.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)

    }
    componentDidMount() {
        this.getDrinks()
    }
    handleAddDrink(drink) {
        const copyDrinks = [...this.state.drinks]
        copyDrinks.unshift(drink)
        this.setState({
            drinks: copyDrinks,
        })
    }
    getDrinks() {
        fetch(baseURL + '/drinks').then(data => {
            return data.json()
        }, err => console.log(err))
            .then(parsedData => { this.setState({ drinks: parsedData }) }, err => console.log(err))
    }
    render() {
        return (
            <div className='drinks'>
                <h1>Drinks</h1>
                <p>Admin can only view NewForm</p>
                <NewForm handleAddDrink={this.handleAddDrink}/>
                
                <table className='drinksDisplay'>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Image</td>
                            <td>Ingredients</td>
                            <td>Price</td>
                        </tr>
                        {this.state.drinks.map(drink => {
                            return (
                                <tr key={drink._id}>
                                    <td>{drink.name}</td>
                                    <td>{drink.image}</td>
                                    <td>{drink.ingredients}</td>
                                    <td>{drink.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}



export default Drinks