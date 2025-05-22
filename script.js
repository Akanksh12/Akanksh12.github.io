/*
particles: {
  color: {
    value: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    },
  }
 */

/*Date('May 23, 2024 00:00:00 GMT+00:00').getTime()*/
let date = new Date()
if (date.getTime() < new Date('May 23, 2024 00:00:00 GMT+01:00').getTime()){
    document.body.style.display = "none"
}

document.addEventListener('click', function(){
    if (navigator.userActivation.isActive) {
        console.log('video is now visible')
        document.querySelector('.container').style.display = 'block'
        document.querySelector('h1').style.display = 'none'
        document.querySelector('video').play()
    }
}, {once: true})

document.querySelector('video').addEventListener('click', function() {

    // play/pause functionality without controls
    document.querySelector('video').paused ? document.querySelector('video').play() : document.querySelector('video').pause()
})