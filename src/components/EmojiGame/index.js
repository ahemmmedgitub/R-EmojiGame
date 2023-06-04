import {Component} from 'react'

import NavbarSection from '../NavBar'

import EmojiCard from '../EmojiCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  render() {
    const {emojisList} = this.props

    return (
      <div className="bg-container">
        <NavbarSection emojisList={emojisList} />
        <ul className="un-order-list-elements">
          {emojisList.map(eachEmoji => (
            <EmojiCard eachEmoji={eachEmoji} key={eachEmoji.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
