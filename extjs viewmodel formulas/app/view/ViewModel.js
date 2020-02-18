Ext.define('App.view.ViewModel', {
	extend: 'Ext.app.ViewModel'

	, alias: 'viewmodel.main'

	, data: {
		// status: null
		status: 'notstarted'
	}

	, formulas: {
		startable: function (get) {
			var st = get('status');
			C('startable', st);
			if (st == 'notstarted' && st != 'completed') {
				return false;
			}
			else {
				return true;
			}
		}
		, pauseable: function (get) {
			var st = get('status');
			C('pauseable', st);
			if ((st == 'started' || st == 'resumed') && st != 'completed') {
				return false;
			}
			else {
				return true;
			}
		}
		, resumable: function (get) {
			var st = get('status');
			C('resumable', st);
			if (st == 'paused' && st != 'completed') {
				return false;
			}
			else {
				return true;
			}
		}
		, submitable: function (get) {
			var st = get('status');
			C('submitable', st);
			if ((st == 'started' || st == 'resumed') && st != 'completed') {
				return false;
			}
			else {
				return true;
			}
		}
	}
});