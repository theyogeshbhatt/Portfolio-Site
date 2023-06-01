import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'


const Details = ({technology,company,companyLink,duration,time,address,}) => {
    const ref = useRef(null);
    return (
    <li ref={ref} 
    className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-left justify-between md:w-[80%]'>
        
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
        >

            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {technology}&nbsp;
            <a 
            href={companyLink}
            target="_blank"
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}
            </a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {duration} | {time}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {address}
            </p>
        </motion.div>
    </li>
    )
}

    const Internship = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
    {
        target: ref,
        offset: ["start end","center start"]
    }
    )

  return (

    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Industrial Training
        </h2>

    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

    <motion.div 
    style={{scaleY: scrollYProgress}}
    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
    md:w-[2px] md:left-[30px] xs:left-[20px]
    " />

<ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

<Details 
technology="Full-Stack MERN Development" 
company="Ducat"
companyLink="https://www.ducatindia.com/"
duration="6 months" 
time="Aug 2022-Feb 2023"  
address="H-43, Sector 63, H Block, Sector 63, Noida, Uttar Pradesh 201301"             
/>

<Details 
technology="Basics of Python Programming" 
company="Open Weaver"
companyLink="https://openweaver.com/"
duration="6 months" 
time="Nov 2022-May 2023"  
address="1st Floor, Arihant Verge, Old Mahabalipuram Road, Perungudi, Chennai, Tamil Nadu 600096"             
/>

<Details 
technology="Basics of JavaScript Programming" 
company="Open Weaver"
companyLink="https://openweaver.com/"
duration="4 months" 
time="Jan 2022-May 2023"  
address="1st Floor, Arihant Verge, Old Mahabalipuram Road, Perungudi, Chennai, Tamil Nadu 600096"             
/>

<Details 
technology="Basics of HTML/CSS Programming" 
company="Open Weaver"
companyLink="https://openweaver.com/"
duration="4 months" 
time="Jan 2022-May 2023"  
address="1st Floor, Arihant Verge, Old Mahabalipuram Road, Perungudi, Chennai, Tamil Nadu 600096"             
/>

<Details 
technology="Java Programming" 
company="Cetpa Infotech Private Limited"
companyLink="https://www.cetpainfotech.com//"
duration="6 weeks" 
time="Jun 2018-Jul 2018"  
address="Focus Academy, Balliwala Flyover, 46, General Mahadev Singh Rd, near HANUMAN TEMPLE, Vijay Park, Dehradun, Uttarakhand 248001"             
/>


</ul>
    </div>
    </div>
  )
}

export default Internship