import './Hero.css'
import girl from '../../pic/image (1).png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={girl} alt=''/>
        <h1><span>I&apos;m Doaa Mahmoud,</span> Frontend Developer </h1>
        <p>As a passionate and detail-oriented Frontend Developer, I specialize in creating responsive, user-friendly websites and applications.</p>
      <div className="connectAction">
        <button className='connectBtn'>Connect with me</button>

      </div>
    </div>
  )
}

export default Hero
