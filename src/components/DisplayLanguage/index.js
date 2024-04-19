import './index.css'
import ActiveButton from '../../context/activeButton'

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

const DisplayLanguage = () => {
  const getLanguage = activeLanguage => {
    switch (activeLanguage) {
      case 'English':
        return languageGreetingsList[0]
      case 'Tamil':
        return languageGreetingsList[1]
      case 'Telugu':
        return languageGreetingsList[2]
      default:
        return null
    }
  }
  return (
    <ActiveButton.Consumer>
      {value => {
        const {activeLanguage} = value
        const {imageUrl, imageAltText} = getLanguage(activeLanguage)

        return (
          <div className="container">
            <img src={imageUrl} alt={imageAltText} className="image" />
          </div>
        )
      }}
    </ActiveButton.Consumer>
  )
}
export default DisplayLanguage
