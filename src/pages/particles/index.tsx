import ParticlesComponent from '@/compnents/particles'
import React from 'react'
import Particles from 'react-tsparticles'

const Particlespage:React.FC = () => {
  return (
    <div>
      <div style={{background:"#222",border:"1px solid red",height:"400px",position:"relative"}}>
      <ParticlesComponent />
      </div>
    </div>
  )
}

export default Particlespage