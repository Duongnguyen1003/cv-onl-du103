import React, { useEffect } from 'react';
import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';
import Main from './Containers/Main/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  document.title ='CV_Nguyen Thuy Duong_Web';
  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="m-0 p-0 box-border">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
