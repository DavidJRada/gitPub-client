import React from 'react'
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';


class Contact extends React.Component {
    render() {
        return (
            <div className='contact'>
                <h1>Contact Us</h1>
                <h3>Want to stay up to date on our grand opening and new specials? </h3>
                
                <p>David Rada:<br/>

E-mail: <br/>
GitHub: <br/>
LinkedIn:<br/>
Website:<br/>
Cell: <br/>
</p>

<p>Sebastian D'Arena:<br/>

E-mail: <br/>
GitHub: <br/>
LinkedIn:<br/>
Website:<br/>
Cell: <br/>
</p>

<p>Jon Weinstein:<br/>

E-mail: <br/>
GitHub: <br/>
LinkedIn:<br/>
<a href = 'https://desolate-fortress-92634.herokuapp.com/'>Website</a><br/>
Cell: 914 715 3894<br/>
</p>



         

                <div className=''></div>
            </div>
        )
    }
}

export default Contact