Ext.define('App.view.Main', {
	extend: 'Ext.grid.Panel'

	, requires: [
		'Ext.plugin.Viewport'

		, 'App.view.MainController'
		, 'App.view.MainModel'
	]

	, controller: 'main'
	, viewModel: 'main'
	, session: true

	, title: 'ViewModel Sessions (bound but isolated viewmodels)'
	, titleAlign: 'center'

	, bind: {
		store: '{allstudents}'
	}

	, forceFit: true

	, columns: [{
		text: 'ID'
		, dataIndex: 'id'
		, flex: 1
	}, {
		text: 'Marks 1'
		, dataIndex: 'marksone'
		, flex: 1
	}, {
		text: 'Marks 2'
		, dataIndex: 'markstwo'
		, flex: 1
	}, {
		xtype: 'widgetcolumn'
		, stopSelection: false
		, width: 120
		, widget: {
			xtype: 'button'
			, margin: 5
			, width: 100
			, text: 'Edit'
			, handler: 'onEdit'
		}
	}]

});