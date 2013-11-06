Ext.define('Lfd.view.MenuBar', {
    extend: 'Ext.container.Container',
    xtype: 'lfd-menubar',
    cls: 'lolmenubar',

    config: {
        items: [
            {
                xtype: 'button',
                action: 'toLeagues',
                text: 'Leagues',
                scale: 'large',
                cls: 'lolbutton'
            },
            {
                xtype: 'button',
                action: 'toLcsStats',
                text: 'LCS Stats',
                scale: 'large',
                cls: 'lolbutton'
            },
            {
                xtype: 'button',
                action: 'toLfdStats',
                text: 'LFD Stats',
                scale: 'large',
                cls: 'lolbutton'
            },
            {
                xtype: 'button',
                action: 'toBrowse',
                text: 'Browse',
                scale: 'large',
                cls: 'lolbutton'
            }
        ]
    }
});