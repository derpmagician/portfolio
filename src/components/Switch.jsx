// components/Switch.jsx
import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './Switch.css'

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
};

const Switch = () => {
  const { t, i18n } = useTranslation();
  const [selectedColor, setSelectedColor] = useState('#093e3e');
  const textPicker = `${t('switch.colorPicker')} ->`

  // const [activeNav, setActiveNav] = useState('#');
  const colorHandler = (e) => {
    // console.log("el target", e.target.value)
    setSelectedColor(e.target.value)
    document.documentElement.style.setProperty('--dark', e.target.value);
  }
  return (
    <div className="bar-container">
      <label htmlFor="mySwicolorbarch"
        className="form-control form-control-color bar-label" >
        {textPicker}
        <input type="color" id="mySwicolorbarch" title="Choose the color of the paws"
          className="colorInput form-control form-control-color bar-color"
          value={selectedColor}
          onChange={colorHandler}
          />
      </label> |
      <div className="botones">
        {Object.keys(lngs).map((lng) => (
          <button key={lng} className="lngBtn btn btn-primary"
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? 'normal' : 'bold',
              backgroundColor: i18n.resolvedLanguage === lng ? 'var(--color-gray)' : '',
              color: i18n.resolvedLanguage === lng ? 'var(--color-white)' : '',
              cursor:  i18n.resolvedLanguage === lng ? 'not-allowed' : 'pointer',
              // fontSize: '18px'
            }}
            type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Switch