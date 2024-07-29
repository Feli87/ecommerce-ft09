import './Home.css'
import React  from 'react';
import { connect } from 'react-redux';
import MiddleSearchBar from './MiddleSearchBar/MiddleSearchBar.js';
import Container from "./Lists/Container";
import MusicPlayer from "../../components/musicPlayer/MusicPlayer";
import BgVideo from "../../components/Home/BgVideo/BgVideo";
import deadmau from "../../assets/audio/feli-music.mp3";
import imagemau from "../../assets/images/feli-music.png";
import {motion} from 'framer-motion';
import {animationOne, transition} from '../../Transitions/Transitions';

const Home = ({STORE_PRODUCTS}) =>{


    return (
      <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
      >
            {STORE_PRODUCTS.product
              ?(
               <div className='BackgroundHome'>
                <BgVideo></BgVideo>
                <MiddleSearchBar/>
                <Container/> 
                <MusicPlayer  name="El azar" singer="Felipe Traina" cover={imagemau} music={deadmau}/>
               </div> 
              ):(
                <div className='BackgroundHome'>
                <MiddleSearchBar/>
                <Container/>
               </div> 
              )}
          </motion.div>
    )
}

const mapStateToProps =  state => {
    return {
      STORE_PRODUCTS : state.productsReducers
    }
}

  
export default connect(mapStateToProps)(Home);
