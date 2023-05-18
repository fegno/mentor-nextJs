import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
  const particlesInit = async (main:any) => {
    await loadFull(main);
  };
 

  const particleOptions:any = {
    particles: {
      number: {
        value: 100, // Adjust the number of particles as needed
        density: {
          enable:true,
          value_area: 300,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 0,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 1, // Adjust the size of the particles
        random: false,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false, // Disable the lines between particles
      },
      move: {
        enable: true,
        speed: 9, // Adjust the speed of the particles
        direction: 'top',
        random: false,
        straight: true,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false, // Disable interaction on hover
          mode: 'repulse',
        },
        onclick: {
          enable: false, // Disable interaction on click
          mode: 'push',
        },
        resize: false,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 10,
          size: 300,
          duration: 1,
          opacity: 8,
          speed: 600,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };
  

  
  return (
    <div>
      <Particles
        id="particles"
        init={particlesInit}
        options={particleOptions}
        style={{position:"static"}}
      />
    </div>
  );
};

export default ParticlesComponent;
