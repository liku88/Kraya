import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
// import "../src/index.css";
const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Karaya Home Page</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
