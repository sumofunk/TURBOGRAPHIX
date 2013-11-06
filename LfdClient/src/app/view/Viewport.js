Ext.define('Lfd.view.Viewport', {
    extend: 'Ext.container.Viewport',
    xtype: 'lfd-viewport',
    cls: 'vport',
    
    config: {
        cls: 'vport',
        layout: 'border'
    },

    menuBar: function() {
        return Ext.create('Lfd.view.MenuBar', {
            region: 'north',
            height: 100
        });
    },

    setActiveItem: function() {
        var args = arguments,
            length = args.length;

        if (length < 1) {
            //TODO: Do anything?
        } else {
            var view = args[0];
            this.removeAll();
            this.add([this.menuBar(), view]);
            view.setRegion('center');

            if(view.setActiveItem && args[1]) {
                view.setActiveItem.apply(view, Ext.Array.slice.call(null, args).slice(1));
            }
        }

    }
});