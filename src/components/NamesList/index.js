import './index.css'
import ActiveButton from '../../context/activeButton'

const NamesList = props => {
  const {nameDetails, isActive} = props
  const {buttonText} = nameDetails

  const activeClassName = isActive ? 'active-style-button' : ''

  return (
    <ActiveButton>
      {value => {
        const {changeLanguage} = value

        const onChangeLanguage = () => {
          changeLanguage(buttonText)
        }

        return (
          <li className="button-list">
            <button
              type="button"
              className={`button ${activeClassName}`}
              onClick={onChangeLanguage}
            >
              {buttonText}
            </button>
          </li>
        )
      }}
    </ActiveButton>
  )
}
export default NamesList
