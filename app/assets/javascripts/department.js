var department = [
	'Cabinet Office',
	'Companies House',
	'DVLA',
	'Department for Education',
  ]
  var element = document.querySelector('#department')
  var id = 'autocomplete-default'
  accessibleAutocomplete({element: element, id: id, source: department})
