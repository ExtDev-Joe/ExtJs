Ext.application({
	name: 'App'

	, models: [
		'App.model.Student'
	]

	, requires: [
		'App.view.Main'
	]

	, mainView: 'App.view.Main'

});