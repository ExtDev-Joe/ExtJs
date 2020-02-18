Ext.define('App.view.MainModel', {
	extend: 'Ext.app.ViewModel'

	, alias: 'viewmodel.main'

	, requires: [
		'App.model.Student'
	]

	, stores: {
		allstudents: {
			model: 'App.model.Student'
			, autoLoad: true
			, session: true
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

		}
	}
});