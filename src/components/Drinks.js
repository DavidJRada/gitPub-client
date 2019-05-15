import React from 'react'
import NewForm from './NewForm'
import UpdateForm from './UpdateForm'

let baseURL = process.env.REACT_APP_BASEURL

// alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3004'
} else {
    baseURL = 'https://gitpub-backend.herokuapp.com'
}


class Drinks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drinks: [],
            drink: {},
            isLoggedIn: false,
            edit: false,

        }
        this.getDrinks = this.getDrinks.bind(this)
        this.handleAddDrink = this.handleAddDrink.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.deleteDrink = this.deleteDrink.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleEditDrink = this.handleEditDrink.bind(this)
        this.currentDrink = this.currentDrink.bind(this)

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
    handleEditDrink(resJSON) {
        const copyEditDrinks = [...this.state.drinks]
        console.log(copyEditDrinks)
        // console.log(drink)
        const findIndex = this.state.drinks.findIndex(drink => drink._id === resJSON._id)
        copyEditDrinks[findIndex] = resJSON
        this.setState({
            drinks: copyEditDrinks
        })
        this.setState({ edit: false })
    }

    getDrinks() {
        fetch(baseURL + '/drinks').then(data => {
            return data.json()
        }, err => console.log(err))
            .then(parsedData => { this.setState({ drinks: parsedData }) }, err => console.log(err))
    }
    deleteDrink(id) {
        fetch(baseURL + '/drinks/' + id, { method: 'DELETE' }).then(response => {
            const findIndex = this.state.drinks.findIndex(drink => drink._id === id)
            const copyDrinks = [...this.state.drinks]
            copyDrinks.splice(findIndex, 1)
            this.setState({ drinks: copyDrinks })
        })
    }
    toggleEdit(edit) {
        this.setState({ edit: !edit })
        //    console.log('It hit')
    }
    currentDrink(index) {
        // console.log(this.state.drinks[index])
        this.setState({ drink: this.state.drinks[index] })
    }

    render() {
        console.log(localStorage.isLoggedIn)
        return (
            <div className='drinks'>
                <h1>Drinks</h1>
                {
                    this.props.isLoggedIn && (this.state.edit ? <UpdateForm drink={this.state.drink} handleEditDrink={this.handleEditDrink} /> : <NewForm handleAddDrink={this.handleAddDrink} />) 
                }
                <div className="row">

                    {this.state.drinks.map((drink, index) => {
                        return (
                            <div className="col s4 m4">
                                <div className='card' key={drink._id} index={index} onClick={() => { this.currentDrink(index) }}>

                                    <div className='card-title'>{drink.name}</div>
                                    <div className='card-image waves-effect waves-block waves-light'>
                                        <img className="activator" src={drink.image}></img>
                                    </div>

                                    <p>${drink.price}</p>
                                    {this.props.isLoggedIn ? <div className="left">
                                        <div className='card-action' onClick={() => { this.deleteDrink(drink._id) }}>Delete</div>
                                    </div> : null}
                                    {this.props.isLoggedIn ? <div className="right">
                                        <div className='card-action' onClick={() => { this.toggleEdit(this.state.edit) }} > Edit</div>
                                    </div> : null}
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">{drink.name}<i className="material-icons right">X</i></span>
                                        <p>Ingredients: {drink.ingredients}</p>
                                        <p>Price: ${drink.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default Drinks