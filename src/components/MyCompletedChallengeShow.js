import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import HelpfulResources from './HelpfulResources'
import CompletedChallengeForm from './CompletedChallengeForm'

class MyInProgressChallengeShow extends React.Component {
  render(){
    
    let wholeChallenge;
    this.props.user ? (
      wholeChallenge = this.props.user.favorites.find(fav => fav.challenge.id === parseInt(this.props.match.params.id))
    ) : null

    return this.props.user ? (
      <div className='my-challenge-show-div'>
        <div className='my-challenge-headline'>
          <h1>{wholeChallenge.challenge.content}</h1>
          <p id='show-rating'>Rating: {wholeChallenge.challenge.rating}/10</p>
        </div>
        
        <div className='links-div'>
          <p>Links:</p> 
          {wholeChallenge.git_links !== null ? <p><a href={wholeChallenge.git_link} target='_blank'>{wholeChallenge.git_link }</a></p> : <p>no links yet</p>}
        </div>
        
      </div>
    ) : (
      <div className="log-in-reminder"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.users}
}

export default connect(mapStateToProps)(MyInProgressChallengeShow)