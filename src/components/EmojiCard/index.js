// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji} = props
  const {emojiName, emojiUrl} = eachEmoji
  return (
    <li className="emoji-list">
      <img src={emojiUrl} alt={emojiName} className="emoji-img" />
    </li>
  )
}

export default EmojiCard
