import Menu from "./Menu"

const CheckboxContainer = () => {
  return (
    <div className="checkbox-container">
      <div className="checkbox-wrapper">
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="checkbox">
          <div className="trace"></div>
          <div className="trace"></div>
          <div className="trace"></div>
        </label>

        <Menu />
      </div>
    </div>
  )
}

export default CheckboxContainer
