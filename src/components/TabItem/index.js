import './index.css'

const TabItem = props => {
  const {details, onTabChange, isTabOn} = props
  const {tabId, displayText} = details

  const onChange = () => {
    onTabChange(tabId)
  }
  const authClass = isTabOn ? 'activeTab' : ''
  return (
    <li className="tabItem">
      <button className={`${authClass} butt`} type="button" onClick={onChange}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
