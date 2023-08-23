import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const About = () => {
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
            My full name is <span className='text-[#FF0000]'>Erdembileg Erdenebileg</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am <span className= 'text-[#FF0000]'>Senior </span>, Undergad Student at Indiana University 
            <br className='sm:block hidden' />
            <br></br>
            I have been coding since <span className= 'text-[#FF0000]'>January,2022 </span>
            <br></br>
            <br></br>
            In my freetime, I like to play <span className= 'text-[#FF0000]'>video games </span> and spend time with <span className= 'text-[#FF0000]'>my beloved people </span>
            
            
          </p>
        </div>
      </div>

    </section>
  );
};

export default SectionWrapper(About,'about');
