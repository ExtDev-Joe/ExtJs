Ext.application({
	name: 'App'

	, requires: [
		'App.view.Main'
	]

	, stores: [
		'Students'
	]

	, mainView: 'App.view.Main'

});