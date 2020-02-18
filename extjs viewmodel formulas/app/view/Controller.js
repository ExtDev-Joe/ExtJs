Ext.define('App.view.Controller', {
	extend: 'Ext.app.ViewController'

	,alias: 'controller.main'

	,onStart: function(){
		// C('onStart');
		this.getViewModel().set('status', 'started');
	}
	,onPause: function(){
		// C('onPause');
		this.getViewModel().set('status', 'paused');
	}

	,onResume: function(){
		// C('onResume');
		this.getViewModel().set('status', 'resumed');
	}

	,onSubmit: function(){
		// C('onSubmit');
		this.getViewModel().set('status', 'completed');
	}

	,init: function(){
		C = Ext.emptyFn;
		//<debug>
		C = console.info.bind(console);
		//</debug>

		// this.getViewModel().set('status', 'notstarted');
		// // this.getViewModel().set('status', 'paused');

		// C('init Main Controller', this.getViewModel().get('status'));
	}

});