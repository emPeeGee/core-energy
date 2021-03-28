import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ReportSection } from './containers/ReportSection/ReportSection';

function App() {
  return (
    <div className="App">
      <Header />
      <ReportSection />
      <Footer />
    </div>
  );
}

export default App;
