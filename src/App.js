import React from 'react';
import Kursus from './state/State';
import Materi from './props/Props';
import './props/style.css';

function App() {
  return (
    <div className="wrapperapp">
      <Kursus/>
      <p>contoh state</p>
      <hr/>
      <Materi  img={require("./props/seo.jpg")} des="belajar seo" harga="12000000"/>
      <Materi  img={require("./props/react.jpg")} des="belajar google adword" harga="42000000"/>
      <Materi  img={require("./props/seo.jpg")} des="belajar React Js" harga="22000000"/>
    </div>
  );
}

export default App;
