import { useState } from 'react';
import './Switch.css'

const Switch = () => {
  const [selectedColor, setSelectedColor] = useState('#0A290C');

  // const [activeNav, setActiveNav] = useState('#');
  const colorHandler = (e) => {
    console.log(e.target.value)
    setSelectedColor(e.target.value)
    document.documentElement.style.setProperty('--dark', e.target.value);
  }
  return (
    <div className="bar-container">
      <label htmlFor="colorbar" className="form-control form-control-color color-bar" >
        Paw Color Picker -
        <input type="color" id="mySwicolorbarch" title="Choose your color"
          className="form-control form-control-color color-bar"
          value={selectedColor}
          onChange={colorHandler}
          />
      </label>

    </div>
  )
}

export default Switch