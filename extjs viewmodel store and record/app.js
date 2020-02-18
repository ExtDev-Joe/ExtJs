Ext.application({

	name: 'App'

	,models: [
		'User'
	]

	,requires: [
		'App.view.Main'
	]

	,mainView: 'App.view.Main'

});