const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/', function (req, res) {
  req.session.destroy()
  res.render('index', {
  })
})

// Applicant-details

router.post('/section-1/personal-details', function (req, res) {
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
    res.render('section-1/personal-details', {
      errorName: nameHasError,
      errorDob: dobHasError,
      errorEmail: emailHasError,
      errorNin: ninHasError,
      errorList: errors
    })
  } else {
    res.redirect('current-department')
  }
})


router.post('/section-1/security-details-answer', function (req, res) {

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

router.post('/section-2/parental-leave-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var parentalLeave = req.session.data['parentalleave']

  // Check whether the variable matches a condition
  if (parentalLeave == "yes") {
    // Send user to next page
    res.redirect('parental-leave-details')
  }
  else {
    // Send user to ineligible page
    res.redirect('transfer-details')
  }

})

router.post('/section-2/student-loan-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var studentLoan = req.session.data['student-loan']

  // Check whether the variable matches a condition
  if (studentLoan == "yes") {
    // Send user to next page
    res.redirect('student-loan-plan')
  }
  else {
    // Send user to ineligible page
    res.redirect('pensions-member')
  }

})

router.post('/section-2/pension-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var pensionAnswer = req.session.data['pension']

  // Check whether the variable matches a condition
  if (pensionAnswer == "yes") {
    // Send user to next page
    res.redirect('which-pension')
  }
  else {
    // Send user to ineligible page
    res.redirect('tax')
  }

})

router.post('/section-2/retirement-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var retirementAnswer = req.session.data['retirement']

  // Check whether the variable matches a condition
  if (retirementAnswer == "yes") {
    // Send user to next page
    res.redirect('line-manager-details')
  }
  else {
    // Send user to ineligible page
    res.redirect('tax')
  }

})


router.post('/section-3/probation-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var pensionAnswer = req.session.data['probation']

  // Check whether the variable matches a condition
  if (pensionAnswer == "yes") {
    // Send user to next page
    res.redirect('probation-end')
  }
  else {
    // Send user to ineligible page
    res.redirect('disciplinary')
  }

})


module.exports = router
