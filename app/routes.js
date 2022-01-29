const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/', function (req, res) {
  req.session.destroy()
  res.render('index', {
  })
})

// Applicant-details

router.post('/service/personal-details', function (req, res) {
  var errors = []
  var nameHasError = false
  var emailHasError = false
  var dobHasError = false
  var ninHasError = false

  if (req.session.data['full-name'] === '') {
    nameHasError = true
    errors.push({
      text: "Enter your full name",
      href: '#full-name'
    })
  }

  if (req.session.data['dob-year'] === '') {
    dobHasError = true
    errors.push({
      text: 'Date of birth must include a year',
      href: '#year'
    })
  }

  if (req.session.data['email'] === '') {
    emailHasError = true
    errors.push({
      text: "Enter your email address",
      href: '#email'
    })
  }

  if (req.session.data['national-insurance'] === '') {
    ninHasError = true
    errors.push({
      text: "Enter your National Insurance Number",
      href: '#national-insurance'
    })
  }


  if (nameHasError || dobHasError || emailHasError || ninHasError) {
    res.render('service/personal-details', {
      errorName: nameHasError,
      errorDob: dobHasError,
      errorEmail: emailHasError,
      errorNin: ninHasError,
      errorList: errors
    })
  } else {
    res.redirect('home-address')
  }
})

// home-address-details

router.post('/service/home-address', function (req, res) {
  var errors = []
  var postcodeHasError = false

  if (req.session.data['postcode'] === '') {
    postcodeHasError = true
    errors.push({
      text: 'Enter a postcode',
      href: '#postcode'
    })
  }

  if (postcodeHasError) {
    res.render('service/home-address', {
      errorPostcode: postcodeHasError,
      errorList: errors
    })
  } else {
    res.redirect('/service/confirm-home-address')
  }
})

// contact-details

router.post('/service/home-address', function (req, res) {
  var errors = []
  var EmailHasError = false

  if (req.session.data['postcode'] === '') {
    EmailHasError = true
    errors.push({
      text: 'Enter a postcode',
      href: '#postcode'
    })
  }

  if (postcodeHasError) {
    res.render('service/home-address', {
      errorPostcode: postcodeHasError,
      errorList: errors
    })
  } else {
    res.redirect('/service/confirm-home-address')
  }
})

router.post('/service/new-dept-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var currentDepartment = req.session.data['new-department']

  // Check whether the variable matches a condition
  if (currentDepartment == "ho") {
    // Send user to next page
    res.redirect('/service/check-your-answers')
  }
  else {
    // Send user to ineligible page
    res.redirect('/service/security-clearance')
  }

})

router.post('/service/security-details-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var higherClearance = req.session.data['clearance']

  // Check whether the variable matches a condition
  if (higherClearance == "bpss") {
    // Send user to next page
    res.redirect('check-your-answers')
  }
  else {
    // Send user to ineligible page
    res.redirect('birth')
  }

})



module.exports = router
