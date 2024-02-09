import React from 'react'
import fullstar from './icons/grade (1).png'
import halfstar from './icons/grade (2).png'
import photo from './image/Ellipse 3.png';
import verticel from './icons/more_vert.png';
import './Comment.css';

const comment = () => {
  return (
    <section className='commentsection1'>
        <div className='commentsection1div1'>
            <img className='commentsection1div1img' src={photo} alt='not found'/>
            <div className='commentsection1div11'>
                <h1 className='commentsection1div11heading'> Samarth Kulkarni</h1>
                <span >
                    <img className='commentstar' src={fullstar} alt='not found'/>
                    <img className='commentstar' src={fullstar} alt='not found'/>
                    <img className='commentstar' src={fullstar} alt='not found'/>
                    <img className='commentstar' src={fullstar} alt='not found'/>
                    <img className='commenthalfstar' src={halfstar} alt='not found'/>
                    <span  className='commentsection1div11span'><span>4.5</span></span>
                </span>

            </div>
            <img className='commentsection1div11img'  src={verticel} alt='not found'/>
        </div>
        <div className='commentsection1div2'>
            <p className='commentsection1div2para'>"The Design Thinking course provided a dynamic and interactive learning experience. It emphasized user-centric design, fostering creativity, collaboration, and critical thinking. The practical exercises and real-world case studies enriched the learning journey. The course equipped me with a versatile toolkit for problem-solving, enhancing my approach to cWas challenges. Highly recommend for those seeking to boost their creative problem-solving skills."</p>
            <hr></hr>
        </div>
    </section>
  )
}

export default comment;