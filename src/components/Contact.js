import React from 'react'
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';



class Contact extends React.Component {
    render() {
        return (
            <div className='contact'>
                <h1>Contact Us</h1>
                <h3>Want to stay up to date on our grand opening and new specials? </h3>
                <div className='left-align'>
                    <p>David Rada<br />
                        E-mail: davidjrada@gmail.com<br />
                        <a href='https://www.linkedin.com/in/davidjrada/'>LinkedIn</a><br />
                        <a href='https://github.com/DavidJRada'>GitHub</a><br />
                    </p>

                    <p>Sebastian D'Arena<br />

                        E-mail: sebastian.darena@gmail.com<br />
                        <a href='https://www.linkedin.com/in/sebdarena/'>LinkedIn</a><br />
                        <a href='https://github.com/sdarena/'>GitHub</a><br />
                    </p>


                    <p>Jon Weinstein<br />

                        E-mail: Jweinst4@gmail.com<br />
                        <a href='https://www.linkedin.com/in/jon-weinstein-301665181/'>LinkedIn</a><br />
                        <a href='https://jweinst4.github.io/'>Wheel of Fortune App</a><br />
                        <a href='https://desolate-fortress-92634.herokuapp.com/'>Digital Closet App</a><br />
                    </p>


                </div>


                <div className=''></div>
            </div >
        )
    }
}

export default Contact