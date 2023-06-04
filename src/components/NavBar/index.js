// Write your code here.

import './index.css'

const NavbarSection = props => {
  const {emojisList} = props
  return (
    <nav className="nav-bar">
      <div className="emoji-score-container">
        <div className="emoji-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji"
            className="emoji-logo"
          />
          <p className="nav-emoji">Emoji Game</p>
        </div>
        <div className="score-container">
          <p className="score">Score: 0</p>
          <p className="score top-score">Top Score: 0</p>
        </div>
      </div>
    </nav>
  )
}

export default NavbarSection
