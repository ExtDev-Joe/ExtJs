Ext.define('App.view.MainModel', {
	extend: 'Ext.app.ViewModel'

	, alias: 'viewmodel.main'

	, data: {
		hiddenRightGrid: true
	}

	, stores: {
		allstudents: {
			source: 'Students'
		}
	}
});