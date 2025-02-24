import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./PhotoPage.scss";
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
const API_KEY = "f8599705-80b5-4d6f-8247-182da6f4e3ac";

function PhotoPage() {

  return (
    <main className='main'>
      <Nav />
      <div className="footer__photo">
        <Footer />
        </div>
    </main>
  );
}

export default PhotoPage;
