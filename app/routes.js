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


  if (nameHasError || dobHasError || emailHasError) {
    res.render('service/personal-details', {
      errorName: nameHasError,
      errorDob: dobHasError,
      errorEmail: emailHasError,
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

module.exports = router
