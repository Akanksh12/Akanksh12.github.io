/*
particles: {
  color: {
    value: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    },
  }
 */

function particles() {

  tsParticles.load({
    id: "tsparticles",
    options: {
      particles: {
        color: {
          value: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
        },
      },
      emitters: {
        life: {
          duration: 0,
        },
      },
      preset: "confetti",
    },
  });

}

document.querySelector('p').addEventListener('click', function(){
  this.innerHTML = "🎂"
})