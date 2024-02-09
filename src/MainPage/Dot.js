import { useState } from 'react';
import './Dot.css';
// import './Dotmedia.css';
import close from './icons/close.png';
import { Link } from 'react-router-dom';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import add from './icons/add.png';
import remove from './icons/remove.png';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';



const Dot = (prop) => {

  const makescroll =()=>{
    document.body.style.overflow = "scroll"
  }
  const [style,setstyle]=useState({visibility:'hidden'
  })
  return (
    <>
    <section className='dotfirstsection'>
      <div className='dotfirstdiv'>
        <h1 className='dotfirstdivheading'>Enroll to this course</h1>
        <img className='dotfirstdivheadingimg' onClick={prop.fun} src={close} alt='not found'/>
      </div>

      <div className='dotseconddiv'>
        <h2 className='dotseconddivheading'>How much time do you need to complete this course?</h2>
        <div className='dotseconddiv1'>
          <div className='dotseconddiv1small' onClick={prop.minus}><h1 className='plusminus'><img className='plusminusimg' src={remove} alt='not found'></img></h1></div>
          <div className='dotseconddiv1big' ><h1 className='monthadd'>{prop.count}</h1><h6 className='month'>months</h6></div>
          <div className='dotseconddiv1small' onClick={prop.add}><h1 className='plusminus'><img className='plusminusimg' src={add} alt='not found'></img></h1></div>
        </div>

        <div className='dotseconddiv2'>
          <div className='dotseconddiv21'>
            <span className="dotseconddiv21span1"><h5 className='dotseconddiv21spanh5'>Approximate study time </h5><InfoOutlinedIcon className='infohover'  onMouseEnter={()=>{setstyle({visibility:'visible'})}}  onMouseLeave={()=>{setstyle({visibility:'hidden'})}}/></span>
            <span className="dotseconddiv21span">Total</span>
          </div>
          <div className='dotseconddiv23' style={style}>Recommended for intense learning and big projects</div>
          <div className='dotseconddiv22'>
              <span className="dotseconddiv21span">{prop.hour} hours/week</span>
              <span className="dotseconddiv21span" style={{fontWeight:"900",fontSize:"2.5rem",display:'flex',flexDirection:'row',alignItems:'center'}}><CurrencyRupeeOutlinedIcon style={{width:'3rem',height:'3rem'}}/> {prop.price}</span>
          </div>
        </div>

        <Link to='/Coursecart'><button className='dotseconddivbutton' onClick={makescroll}>Add to Cart</button></Link>

      </div>
        
    </section>
    </>
  )
}

export default Dot