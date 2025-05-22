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
