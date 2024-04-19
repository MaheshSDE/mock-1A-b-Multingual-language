import {Component} from 'react'
import NamesList from './components/NamesList'
import DisplayLanguage from './components/DisplayLanguage'
import ActiveButton from './context/activeButton'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeLanguage: languageGreetingsList[0].buttonText,
  }

  changeLanguage = button => {
    this.setState({activeLanguage: button})
  }

  render() {
    const {activeLanguage} = this.state
    return (
      <ActiveButton.Provider
        value={{activeLanguage, changeLanguage: this.changeLanguage}}
      >
        <div className="app-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="names-list-container">
            {languageGreetingsList.map(eachItem => (
              <NamesList
                nameDetails={eachItem}
                key={eachItem.id}
                isActive={eachItem.buttonText === activeLanguage}
              />
            ))}
          </ul>

          <DisplayLanguage />
        </div>
      </ActiveButton.Provider>
    )
  }
}
export default App
