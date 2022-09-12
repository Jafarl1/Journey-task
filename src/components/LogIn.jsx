import React from 'react'

function LogIn() {

    const Click = (e) => {
        e.target.classList.toggle('clicked')
    }



    return (
        <div className="login">
            <div className="heading">
                <h2 style={{ color: 'black' }}>
                    Sign up
                </h2>
                <h3 style={{ color: 'darkgreen', cursor: 'pointer' }}>
                    Log In
                </h3>
            </div>
            <div className="socials">
                <div className="facebook_btn" style={{ backgroundColor: '#4267B2' }}>
                    <div className="icon">
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <span>
                        Facebook
                    </span>
                </div>
                <div className="google_btn" style={{ backgroundColor: '#DB4437' }}>
                    <div className="icon">
                        <i class="fa-brands fa-google-plus-g"></i>
                    </div>
                    <span>
                        Google
                    </span>
                </div>
            </div>
            <div className="line">
                <span>
                    or
                </span>
            </div>
            <form className='form'>
                <input type="text" name="name" id="name" placeholder='First Name' onClick={(e) => Click(e)} />
                <input type="text" name="surname" id="surname" placeholder='Last Name' onClick={(e) => Click(e)} />
                <input type="email" name="email" id="email" placeholder='Email' onClick={(e) => Click(e)} />
                <input type="password" name="password" id="password" placeholder='Choose Password' onClick={(e) => Click(e)} />
                <input type="password" name="repeat" id="repeat" placeholder='Confirm Password' onClick={(e) => Click(e)} />
                <label htmlFor="check" className='check_label'>
                    <div className="mark"></div>
                    <input type="checkbox" name="check" id="check" />
                    <p>
                        Agree our <span> Terms & conditions</span>
                    </p>
                </label>
                <button>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default LogIn