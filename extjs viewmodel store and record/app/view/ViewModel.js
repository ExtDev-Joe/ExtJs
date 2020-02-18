Ext.define('App.view.ViewModel', {
	extend: 'Ext.app.ViewModel'

	,alias: 'viewmodel.main'

	,stores: {
		users: {
			model: 'App.model.User'

			,proxy: {
				type: 'rest'
				,url: 'data/users.json'
				,reader: {
					type: 'json'
					,rootProperty: 'values'
				}
			}

			,autoLoad: true
		}
	}

	,links: {
		theUser: {
			type: 'App.model.User'
			,create: true
			// ,create: {
			// 	id: 'xxx'
			// 	,name: 'yyy'
			// }
		}
	}

	,data: {
		selUser: '{theUser}'
	}
});