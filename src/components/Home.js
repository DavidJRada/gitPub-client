import React from 'react'

class Home extends React.Component {

    render() {

        return (
            <div className='home'>
                <h1>Home</h1>
                <div className='itemsDisplay'>
                    <div className='beers'>
                        <h2>Beers</h2></div>
                    <div className='cocktails'>
                        <h2>Cocktails</h2></div>
                    <div className='food'>
                        <h2>Food</h2></div>
                </div>
            </div>
        )
    }
}

export default Home