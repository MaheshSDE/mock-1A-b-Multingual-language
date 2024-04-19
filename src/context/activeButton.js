import React from 'react'

const ActiveButton = React.createContext({
  activeLanguage: '',
  changeLanguage: () => {},
})
export default ActiveButton
