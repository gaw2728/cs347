/* eslint-disable no-undef */
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
 * This specific script handles the form validation and posting
 * of the form to some currently non-consequential place. The
 * form will display messages helpful for people filling out the
 * form.
 */
window.addEventListener('load', function () {
  /* Simple log to show that the script has begun running. */
  console.log('JavaScript has begun to execte.')

  /* --------------- BEGIN LOOSE FORM VALIDATION  --------------- */

  /* constants required for form validation */
  const nameInput = document.getElementById('name_field')
  const nameLabel = document.getElementById('name_field_label')
  const userInput = document.getElementById('user_message')
  const userLabel = document.getElementById('user_message_label')
  const personType = document.getElementById('person_type')
  const myForm = document.querySelector('form')

  /* logs to make sure constants have correct values */
  console.log(nameInput)
  console.log(nameLabel)
  console.log(userInput)
  console.log(userLabel)
  console.log(personType)
  console.log(myForm)

  /* Focus/blur for name text field */
  nameInput.addEventListener('focus', function (e) {
    nameLabel.innerHTML = 'Valid names have at least 3 letters and no special characters!'
  })
  nameInput.addEventListener('blur', function (e) {
    nameLabel.innerHTML = 'Name'
  })

  /* Focus/blur for user input text area */
  userInput.addEventListener('focus', function (e) {
    userLabel.innerHTML = 'You have to at least send me one character!'
  })
  userInput.addEventListener('blur', function (e) {
    userLabel.innerHTML = 'Have something you would like to tell me?'
  })

  /* --------------- END LOOSE FORM VALIDATION  --------------- */

  /* --------------- BEGIN HEAVY FORM VALIDATION AND POST  --------------- */

  myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(nameInput.value)
    console.log(personType.value)
    console.log(userInput.value)

    var nameLength = nameInput.value.length
    var userLength = userInput.value.length
    console.log(nameInput.value.length)
    console.log(userInput.value.length)
    var nameVal = nameInput.value

    if (nameLength >= 2 && userLength > 0 && /^[A-Za-z]+$/.test(nameVal)) {
      console.log('inside if')
      var xhr = new XMLHttpRequest()
      var url = ''
      var data = [nameInput.value, personType.value, userInput.value]

      xhr.responseType = 'json'
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          return xhr.response
        }
      }

      xhr.open('POST', url, true)
      xhr.send(data)
    } else {
      console.log('inside else')
      /* Check for user message field */
      if (userLength === 0) {
        userLabel.innerHTML = '**INVALID: Message must be at least 1 character!'
      }
      /* Checks for name field */
      if (nameLength < 2 && /^[A-Za-z]+$/.test(nameVal)) {
        nameLabel.innerHTML = '**INVALID: Name field must contain at least 2 letters!'
      } else if (nameLength < 2 && !/^[A-Za-z]+$/.test(nameVal)) {
        nameLabel.innerHTML = '**INVALID: Name field must contain at least 2 letters and no symbols!'
      } else if (nameLength >= 2 && !/^[A-Za-z]+$/.test(nameVal)) {
        nameLabel.innerHTML = '**INVALID: Name field must contain no symbols!'
      }
    }
    myForm.reset()
  })
  /* --------------- END HEAVY FORM VALIDATION AND POST  --------------- */
})
