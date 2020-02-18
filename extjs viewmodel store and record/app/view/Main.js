Ext.define('App.view.Main', {
	extend: 'Ext.Panel'

	,requires: [
		'Ext.grid.Grid'

		,'App.view.Controller'
		,'App.view.ViewModel'
	]

	,controller: 'main'
	,viewModel: 'main'

	,title: 'ViewModel Store and Model Example'

	,scrollable: 'vertical'

	,layout: {
		type: 'vbox'
		,align: 'stretch'
	}

	,defaults: {
		flex: 1
	}

	,items: [{
		xtype: 'grid'
		,bind: {
			store: '{users}'
		}
		,columns: [{
			dataIndex: 'id'
			,text: 'ID'
		},{
			dataIndex: 'name'
			,text: 'Name'
			,flex: 1
		}]
		,listeners: {
			select: 'onSelect'
		}
	},{
		xtype: 'formpanel'
		,height: 300
		,title: 'Selected Record'
		,bodyPadding: 20
		,defaults: {
			xtype: 'textfield'
		}
		,items: [{
			readOnly: true
			,name: 'id'
			,label: 'ID'
			,hidden: true
			,bind: {
				value: '{selUser.id}'
			}
		},{
			name: 'name'
			,label: 'Name'
			,bind: {
				value: '{selUser.name}'
			}
		}]
		,buttons: [{
			text: 'Save'
			,handler: 'onSave'
			,disabled: true
			,bind: {
				disabled: '{!selUser.dirty}'
			}
		}]
	}]
});