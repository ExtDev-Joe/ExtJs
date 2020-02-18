Ext.define('App.view.Main', {
	extend: 'Ext.Panel'

	, requires: [
		'App.view.Controller'
		, 'App.view.ViewModel'
	]

	, controller: 'main'
	, viewModel: 'main'

	, title: 'ViewModel Formulas Example'
	, titleAlign: 'center'

	, bodyPadding: 20

	, scrollable: 'vertical'

	, items: [{
		xtype: 'container'
		, docked: 'top'
		, layout: {
			type: 'hbox'
			, pack: 'center'
		}
		, defaults: {
			xtype: 'button'
			, margin: 20
			, hidden: true
		}
		, items: [{
			text: 'Start'
			, bind: {
				hidden: '{startable}'
			}
			, handler: 'onStart'
		}, {
			text: 'Pause'
			, bind: {
				hidden: '{pauseable}'
			}
			, handler: 'onPause'
		}, {
			text: 'Resume'
			, bind: {
				hidden: '{resumable}'
			}
			, handler: 'onResume'
		}, {
			text: 'Submit'
			, bind: {
				hidden: '{submitable}'
			}
			, handler: 'onSubmit'
		}]
	}]
});