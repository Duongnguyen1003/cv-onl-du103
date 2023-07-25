import React from 'react';
import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';
import Main from './Containers/Main/Main';

function App() {
  document.title ='CV_Nguyen Thuy Duong_Web';
  return (
    <div className="m-0 p-0 box-border">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
