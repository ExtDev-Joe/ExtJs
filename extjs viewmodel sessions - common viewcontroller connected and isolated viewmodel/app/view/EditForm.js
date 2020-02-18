Ext.define('App.view.EditForm', {
	extend: 'Ext.form.Panel'

	, xtype: 'editform'
	, reference: 'editform'

	, defaults: {
		xtype: 'textfield'
		, allowBlank: false
	}

	, bodyPadding: 20

	, bind: {
		title: '{formtitle}'
	}

	, items: [{
		fieldLabel: 'Marks One'
		, name: 'marksone'
		, bind: {
			value: '{theStudent.marksone}'
		}
	}, {
		fieldLabel: 'Marks Two'
		, name: 'markstwo'
		, bind: {
			value: '{theStudent.markstwo}'
		}
	}]

	, buttons: [{
		text: 'Cancel'
		, handler: 'onCancel'
	}, '->', {
		text: 'Save'
		, formBind: true
		, handler: 'onSave'
	}]

});