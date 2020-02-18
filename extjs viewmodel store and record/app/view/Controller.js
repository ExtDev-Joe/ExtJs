Ext.define('App.view.Controller', {
	extend: 'Ext.app.ViewController'

	,alias: 'controller.main'

	,onSelect: function(g, recs){
		var selected = recs[0];
		// C('onSelect', selected.data);
		this.getViewModel().set('selUser', selected);
	}

	,init: function(){
		C = Ext.emptyFn;
		//<debug>
		C = console.info.bind(console);
		//</debug>
	}

});