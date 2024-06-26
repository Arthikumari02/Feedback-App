import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {shouldShowFeedBack: false}

  onHandlerFeedBack = () => {
    this.setState({shouldShowFeedBack: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {shouldShowFeedBack} = this.state

    return (
      <div className="bg-container">
        {shouldShowFeedBack ? (
          <div className="thank-you-container">
            <img className="emoji-icon" src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank You</h1>
            <p className="feedBack">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="feed-back-container">
            <h1 className="emoji-header">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachItem => (
                <li key={eachItem.id} className="emoji-item">
                  <div className="emoji-details">
                    <img
                      className="emoji-icon"
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      onClick={this.onHandlerFeedBack}
                    />
                    <p className="emoji-name">{eachItem.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
