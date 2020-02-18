Ext.define('App.model.Student', {
	extend: 'Ext.data.Model'

	, fields: ['id', 'marksone', 'markstwo']

	, proxy: {
		type: 'localstorage'
		, id: 'mainstore-items'
	}

})