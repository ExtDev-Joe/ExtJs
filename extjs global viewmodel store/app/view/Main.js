Ext.define('App.view.Main', {
	extend: 'Ext.panel.Panel'

	, title: 'Chained Store (Global Store referenced in a ViewModel) - can be filtered and sorted independently!'
	, titleAlign: 'center'

	, requires: [
		'Ext.plugin.Viewport'
		, 'Ext.grid.Panel'

		, 'App.view.MainModel'
		, 'App.view.MainController'
	]

	, viewModel: 'main'
	, controller: 'main'

	, tools: [{
		bind: {
			glyph: '{hiddenRightGrid ? "xf070@FontAwesome" : "xf06e@FontAwesome"}'
		}
		, callback: 'toggleRightGrid'
	}]

	, layout: {
		type: 'hbox'
		, align: 'stretch'
	}

	, defaults: {
		flex: 1
	}

	, items: [{
		xtype: 'grid'
		, title: 'Grid bound to a ViewModel Store'
		, bind: {
			store: '{allstudents}'
		}

		, tbar: [{
			text: 'Load'
			, handler: 'onLoadViewModelStore'
		}]

		, forceFit: true

		, columns: [{
			text: 'ID'
			, dataIndex: 'id'
		}, {
			text: 'Marks 1'
			, dataIndex: 'marksone'
		}, {
			text: 'Marks 2'
			, dataIndex: 'markstwo'
		}]
	}, 



	{
		xtype: 'grid'
		, title: 'Grid bound to a App Level (Glboal) Store'
		, store: 'Students'
		, forceFit: true

		, bind: {
			hidden: '{hiddenRightGrid}'
		}

		, tbar: [{
			text: 'Load'
			, handler: 'onLoadGlobalStore'
		}]

		, columns: [{
			text: 'ID'
			, dataIndex: 'id'
		}, {
			text: 'Marks 1'
			, dataIndex: 'marksone'
		}, {
			text: 'Marks 2'
			, dataIndex: 'markstwo'
		}]
	}]

});

