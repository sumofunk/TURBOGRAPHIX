Ext.define('Lfd.view.component.DropDownTab', {
    extend: 'Ext.container.Container',
    xtype: 'dropdowntab',

    config: {
        id: 'ddt'
    },

    openButton: function() {
        return Ext.create('Ext.button.Button', {
            text: 'My Leagues',
            action: 'openMenu'
        });
    },

    closeButton: function() {
        return Ext.create('Ext.button.Button', {
            text: 'My Leagues',
            action: 'closeMenu'
        });
    },

    close: function() {
        this.removeAll();
        this.add(this.openButton());
    },

    open: function() {

        this.removeAll();

        this.menuList = Ext.create('Ext.grid.Panel', {
            title: 'Simpsons',
            store: Ext.create('Ext.data.Store', {
                storeId:'simpsonsStore',
                fields:['name', 'email', 'phone'],
                data:{'items':[
                    { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
                    { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
                    { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
                    { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
                ]},
                proxy: {
                    type: 'memory',
                    reader: {
                        type: 'json',
                        root: 'items'
                    }
                }
            }),
            columns: [
                { text: 'Name',  dataIndex: 'name' },
                { text: 'Email', dataIndex: 'email', flex: 1 },
                { text: 'Phone', dataIndex: 'phone' }
            ]
        });

        this.add([this.closeButton(), this.menuList]);
    },

    constructor: function(options) {
        this.callParent(options);

        this.add(this.openButton());
    }
})
