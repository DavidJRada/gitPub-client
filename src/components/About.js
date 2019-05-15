import React from 'react'
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

class About extends React.Component {
    render() {
        return (
            <>
                <div className='header'>
                    <h1>About</h1>
                </div>
                <div className='about-content'>
                    <p>David, Jon and Sebastian recently graduated from the General Assembly Software Engineering Immersive Program in June, 2019.  The theme of this project was taken from a class tutorial earlier in the year.  We wanted to add on to the idea of creating a bar and restaurant that served technology related drinks and foods.</p>

                    <p>We are currently working on opening up an actual gitPub in the Stamford area.  Some of our signature cocktails include the APIPA and the Baby Got Backend.  The goal is to open our doors in August, 2019 and have our Grand Opening around Labor Day.</p>

                    <p>David Rada has a bachelors in being cool while Sebastian has a bachelors in being awesome.  Jon has a bachelors in Math and has worked as a financial analyst for his entire professional career, where he learned to code in VBA, sparking his interest in programming. </p>
                </div>
            </>
        )
    }
}

export default About