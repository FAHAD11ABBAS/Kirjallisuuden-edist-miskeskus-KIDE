import React from 'react';
import './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import Sections from './components/Sections';
import DiagramSection from './components/DiagramSection';
import AuthorsSection from './components/AuthorsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Sections />
        <DiagramSection />
        <AuthorsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
