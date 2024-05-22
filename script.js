/*
particles: {
  color: {
    value: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    },
  }
 */

function particles(canons) {
  console.log('particles launched')
  tsParticles.load({
    id: "tsparticles",
    options: {
      particles: {
        color: {
          value: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
        },
      },
      emitters: canons,
      preset: "confetti",
    },
  });

}

document.querySelector('p').addEventListener('click', function(){
  document.querySelector('h1').style.display = "block";
  this.innerHTML = "🎂"
  this.style.fontSize = "10rem"
  let canons = []
  for (let i = 0; i < Math.floor(Math.random() * (Math.floor(7) - Math.ceil(3)) + Math.ceil(3)); i++)
  {
    canons.push({
      life: {
        count: 0
      }
    })
  }
  particles(canons)
})