Ext.define('App.view.MainController', {
	extend: 'Ext.app.ViewController'

	, alias: 'controller.main'

	, toggleRightGrid: function () {
		var vm = this.getViewModel()
		vm.set('hiddenRightGrid', !vm.get('hiddenRightGrid'));
	}

	, onLoadViewModelStore: function () {
		C('onLoadViewModelStore');
		
		// * this doesn't work!
		// this.getStore('allstudents').load();
		// * this works
		Ext.getStore('Students').load();
	}

	, onLoadGlobalStore: function () {
		C('onLoadGlobalStore');
		
		Ext.getStore('Students').load();
	}

	, init: function () {
		C = Ext.emptyFn;
		//<debug>
		C = console.info.bind(console);
		//</debug>
	}

});