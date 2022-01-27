var country = [
	'Argentina',
	'Australia',
	'Belgium',
	'Germany',
	'Luxembourg',
	'Pakistan',
		'Singapore',
				'	United Kingdom',
				'United States of America',
				'Zambia',

  ]
  var element = document.querySelector('#country')
  var id = 'autocomplete-default'
  accessibleAutocomplete({element: element, id: id, source: country})
