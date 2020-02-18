Ext.define('App.store.Students', {
	extend: 'Ext.data.Store'

	, fields: [
		'id'
		, 'marksone'
		, 'markstwo'
	]

	, proxy: {
		type: 'localstorage'
		, id: 'mainstore-items'
	}
	// , autoLoad: true
	, listeners: {
		load: function (store) {
			if (!store.getCount()) {
				for (var i = 0; i < 20; i++) {
					store.add({
						marksone: Math.floor((Math.random() * 100) + 1),
						markstwo: Math.floor((Math.random() * 100) + 1)
					});
				}
				store.sync();
			}
		}
	}
});
