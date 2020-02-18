Ext.define('App.view.MainController', {
	extend: 'Ext.app.ViewController'

	, alias: 'controller.main'

	, requires: [
		'App.view.EditForm'
	]

	, init: function () {
		C = Ext.emptyFn;
		//<debug>
		C = console.info.bind(console);
		//</debug>
	}

	, onEdit: function (btn) {
		var record = btn.getWidgetRecord();

		this.form = this.view.add({
			xtype: 'editform'
			, session: true
			, viewModel: {
				data: {
					formtitle: 'Editing Record - ' + record.getId()
				}

				, links: {
					theStudent: record || {
						type: 'App.model.Student'
						, create: true
					}
				}
			}
		});

		Ext.create('Ext.window.Window', {
			width: 600
			, height: 400
			, header: false
			, autoShow: true
			, layout: 'fit'
			, modal: true
			, hideAction: 'destroy'
			, closable: true
			, items: [this.form]
			, listeners: {
				close: 'onCancel'
				, scope: this
			}
		});
	}

	, onSave: function (btn) {
		var session = this.form.getSession();
		session.save();
		this.getStore('allstudents').sync();
		btn.up('window').close();
	}

	, onCancel: function (btn) {
		var win = btn.up('window');
		win && win.close();
	}

});