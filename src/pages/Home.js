import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Header } from '../components/Header/Header'
// import Trending from '../components/Trending/Trending'
import TrendingMusic from '../components/Trending/TrendingMusic';
import CardSlider from '../components/Category/CardSlider';
function Home() {


  const carouselItems = [
    {
      id: 1,
      title: 'Rock',
      text: 'Description for Item 1',
      imgSrc: 'https://chimerical-puffpuff-68664f.netlify.app/images/b4.jpg'
    },
    {
      id: 2,
      title: 'Pop',
      text: 'Description for Item 1',
      imgSrc: 'https://chimerical-puffpuff-68664f.netlify.app/images/b1.jpg'
    },
    {
      id: 3,
      title: 'Hip-Hop',
      text: 'Description for Item 1',
      imgSrc: 'https://chimerical-puffpuff-68664f.netlify.app/images/b2.jpg'
    },
    {
      id: 4,
      title: 'Jazz',
      text: 'Description for Item 1',
      imgSrc: 'https://chimerical-puffpuff-68664f.netlify.app/images/b3.jpg'
    },
    {
      id: 5,
      title: 'Bollywood',
      text: 'Description for Item 1',
      imgSrc: 'https://chimerical-puffpuff-68664f.netlify.app/images/b4.jpg'
    },
    
  ];

  return (
    <div>
        <NavBar/>
        <TrendingMusic/>
        <CardSlider items={carouselItems} />
    </div>
  )
}

export default Home