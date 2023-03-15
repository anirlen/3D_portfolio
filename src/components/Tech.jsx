import { motion } from "framer-motion";
import {useState, useRef} from 'react';
import{slideIn} from '../utils/motion';



import { styles } from "../styles";
import { Solar_system, EarthCanvas} from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FF0000]' />
          <div className='w-1 sm:h-80 h-40 bg-[#FF0000]' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#FF0000]'>Projects</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            None <br className='sm:block hidden' />
            Yet, but 
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            soon will be as much as these <span className='text-[#FF0000]'>Stars</span>
          </p>
          </p>
        </div>
      </div>

      <Solar_system /> 
    

  


      
    </section>
  );
};

export default Hero;