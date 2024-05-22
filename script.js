/*
particles: {
  color: {
    value: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    },
  }
 */

function particles() {
  console.log('particles launched')
  tsParticles.load({
    id: "tsparticles",
    options: {
      particles: {
        color: {
          value: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
        },
      },
      emitters: [

        { 
          life: {
            count: 0
          }
        },
 
        { 
          life: {
            count: 0
          }
        },
 
        { 
          life: {
            count: 0
          }
        },
                      
      ],
      preset: "confetti",
    },
  });

}

document.querySelector('p').addEventListener('click', function(){
  this.innerHTML = "🎂"
  setTimeout(particles(), 0)
  setTimeout(particles(), 0)
  setTimeout(particles(), 0)
})