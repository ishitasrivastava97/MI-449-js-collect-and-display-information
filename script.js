const firstInput = document.getElementById('fname')
const secondInput = document.getElementById('lname')
const describeInput = document.getElementById('description')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
const madlibParagraph1 = document.getElementById('madlib1')
const madlibParagraph2 = document.getElementById('madlib2')

const updateMadlib = function () {
  const fname = firstInput.value
  const lname = secondInput.value
  const description = describeInput.value
  const email = emailInput.value
  const phone = phoneInput.value
  const string = '<h1>Hi, my name is ' + fname + ' ' + lname + '</h1>' + ' ' + '<p>' + description + '</p>' + ' <p>If you are interested in a date, you can email me at <a href="mailto:' + email + '" target="_blank ">' +
    email + '</a>' + ' ' + 'or give me a call at <a href="tel:' + phone + ' " target = "_blank" > ' + phone + ' </a>' + '</p > '

  madlibParagraph1.innerHTML = string
  madlibParagraph2.textContent = string
}

firstInput.addEventListener('input', updateMadlib)
secondInput.addEventListener('input', updateMadlib)
describeInput.addEventListener('input', updateMadlib)
emailInput.addEventListener('input', updateMadlib)
phoneInput.addEventListener('input', updateMadlib)
