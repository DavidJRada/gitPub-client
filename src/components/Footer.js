import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div className = 'footer'>
                <div className = 'row'>
                    <div className = 'col'>
               
                        <div className='footerLogo'>
                            <img className='logo' src='https://i.imgur.com/fdE9N4n.png'></img>
                        </div>
                    </div>

                    <div className = 'col'>
                        <div className = 'footerText'>
                        <br/>
                        
                            <h4>Made in Stamford, CT</h4>
                        </div>
                    </div>
                </div>
            </div>
                
        )
    }
}

export default Footer