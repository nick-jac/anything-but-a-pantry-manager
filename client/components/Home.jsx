import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Home extends React.Component {
  render() {
    return (
      <div>
        <img className='headerImage' src="images/pantry-to-plate-home.jpg" alt='header'/>
          <div className="container-fluid full-width">

            {this.props.auth.isAuthenticated ? '':
            <div className="row">
              <div className="col-sm-3">
                <Link to='/login'><input className="btn btn-lg btn-green btn-block mb-3" value="Login" type="submit" /></Link>
              </div>
              <div className="col-sm-3">
                <Link to='/register'><input className="btn btn-lg btn-green btn-block mb-3" value="Register" type="submit" /></Link>
              </div>
          </div>}

          <div className="container-fluid full-width">
            <h2>Welcome to Pantry to Plate</h2>
            <div className="row">
              <div className="col-sm-3">
                <p>Have you ever wondered what to do with those pesky ingredients in your pantry that stay at the back? well wonder no more!</p>
              </div>
              <div className="col-sm-3">
                <p>Simply enter in your ingredients and recieve amazing recipes, all at the click of a button</p>
              </div>
              <div className="col-sm-3">
                <p>Make a profile to store all your dietary requirements to no longer worry about wading through millions of recipes that aren't suitable</p>
              </div>
              <div className="col-sm-3">
                <p>Having friends over for dinner and want to make something everyone can enjoy? No worries! link up to your friends profiles and away you go.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Home)
