import React from 'react'
import NewFoodForm from './NewFoodForm'
import UpdateFoodForm from './UpdateFoodForm'

let baseURL = process.env.REACT_APP_BASEURL

// alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3004'
} else {
    baseURL = 'https://gitpub-backend.herokuapp.com'
}


class Foods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foods: [],
            food: {},
            edit: false
        }
        this.getFoods = this.getFoods.bind(this)
        this.handleAddFood = this.handleAddFood.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.deleteFood = this.deleteFood.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleEditFood = this.handleEditFood.bind(this)
        this.currentFood = this.currentFood.bind(this)

    }
    componentDidMount() {
        this.getFoods()
    }
    handleAddFood(food) {
        const copyFoods = [...this.state.foods]
        copyFoods.unshift(food)
        this.setState({
            foods: copyFoods,
        })
    }
    handleEditFood(resJSON) {
        const copyEditFoods = [...this.state.foods]
        console.log(copyEditFoods)
        // console.log(food)
        const findIndex = this.state.foods.findIndex(food => food._id === resJSON._id)
        copyEditFoods[findIndex] = resJSON
        this.setState({
            foods: copyEditFoods
        })
        this.setState({edit: false} )
    }

    getFoods() {
        fetch(baseURL + '/foods').then(data => {
            return data.json()
        }, err => console.log(err))
            .then(parsedData => { this.setState({ foods: parsedData }) }, err => console.log(err))
    }
    deleteFood(id) {
        fetch(baseURL + '/foods/' + id, { method: 'DELETE' }).then(response => {
            const findIndex = this.state.foods.findIndex(food => food._id === id)
            const copyFoods = [...this.state.foods]
            copyFoods.splice(findIndex, 1)
            this.setState({ foods: copyFoods })
        })
    }
    toggleEdit(edit) {
       this.setState({edit: !edit})
    //    console.log('It hit')
    }
        currentFood(index) {
            // console.log(this.state.foods[index])
            this.setState({food: this.state.foods[index]})
        }

    render() {
        console.log(this.state.edit)
        return (
            <div className='foods'>
                <h1>Foods</h1>
                <p>Admin can only view NewFoodForm</p>
                {this.state.edit ? <UpdateFoodForm food={this.state.food} handleEditFood={this.handleEditFood}/> : <NewFoodForm handleAddFood={this.handleAddFood} /> }

                <table className='foodsDisplay'>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Image</td>
                            <td>Ingredients</td>
                            <td>Price</td>
                        </tr>
                        {this.state.foods.map((food, index) => {
                            return (
                                <tr key={food._id} index={index} onClick= {() =>{this.currentFood(index)}}>

                                    <td>{food.name}</td>
                                    <td>{food.image}</td>
                                    <td>{food.ingredients}</td>
                                    <td>{food.price}</td>

                                    <td onClick={() => { this.deleteFood(food._id) }}>X</td>
                                    <td onClick={() => { this.toggleEdit(this.state.edit) }} >Edit</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}



export default Foods