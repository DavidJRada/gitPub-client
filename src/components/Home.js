import React from 'react'
import GoogleMaps from "simple-react-google-maps"



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
                        <div className = 'googleMap'>
                        <GoogleMaps
  apiKey={"AIzaSyBiY6zDgvndubHYybHkhfZLuxhAlBRz0PE"}
  style={{height: "400px", width: "100%"}}
  zoom={15}
  center={{lat: 41.043296, lng: -73.532314}}
  markers={{lat: 41.043296, lng: -73.532314}} //optional
/>
</div>

                </div>

   
                
            </div>
        )
    }
}

export default Home