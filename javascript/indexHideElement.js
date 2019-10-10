/**
 * The preceeding JavaScript was written by Geoffrey Wright.
 * PPP project Part 3 for Full-Stack Web Devepotment CS347
 * FA19 0001 Dr. Stewart
 *
 * The function below serves as the JavaScript 'main' ensuring no
 * DOM manipulation occurs before the page has had a chance to load.
 * It establishes a window listener to accomplish this.
 *
 * _______________SPECIFIC TO THIS JAVASCRIPT_______________
 * This specific script modifies the figure on the home page so
 * that it is hidden when a user mouses over it. NOTE: This effect
 * holds only while the mouse is "moused" over the figure. This
 * script also removes a bad class name and replaces it with a new
 * class and uses query selector in it's verification.
 */
window.addEventListener('load', function () {
  /* Simple log to show that the script has begun running. */
  console.log('JavaScript has begun to execte.')

  /* --------------- BEGIN ADD/REMOVE CLASS  --------------- */

  /* While there is no CSS (in index.css) executing to change
  the appearance of the figure element in index.html (by vitrue
  of having a .class rule defined), the below console logs and
  function calls show the successful dropping and adding of
  a HTML element's class. */
  const element = document.getElementById('figure')
  console.log(element)
  element.classList.remove('REALLY_BAD_CLASS_NAME')
  console.log(element)
  element.classList.add('professional_picture')
  console.log('The value of Element after all modification:')
  console.log(element)

  /* As an extra bonus a query selector can be used to verify this
  change in class has occured. */
  const elementVerified = document.querySelector('.professional_picture')
  console.log('The value of elementVerified after a querySelector searching on ".professional_picture":')
  console.log(elementVerified)

  /* --------------- END ADD/REMOVE CLASS  --------------- */

  /* --------------- BEGIN HIDE ELEMENT  --------------- */
  /* Now that there is a verified figure with the class '.professional_piture'
  I'm following up with code here that will hide the image when the mouse
  *CLICKS THE FIGURE* not the image. I enlargened margins in the index.css to
  make this easier to do. */
  const myPic = document.getElementById('my_pic')
  console.log(typeof mtPic)
  console.log(myPic)
  console.log(myPic.style.display)
  console.log('Handling hiding element')
  elementVerified.addEventListener('click', function (e) {
    console.log('click event triggered')
    if (myPic.style.display === '') {
      myPic.style.display = 'none'
    } else {
      myPic.style.display = ''
    }
  })
  /* --------------- END HIDE ELEMENT  --------------- */
})

/* ASK WHY THIS BEING CALLED STOPS FLO OF EXECUTION */
/* function verify (element, elementVerified) {
  if (element === elementVerified) {
    console.groupCollapsed('true')
  } else {
    console.log('false')
  }
} */
