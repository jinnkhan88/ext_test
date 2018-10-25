/**
 * This class is a custom toolbar intended for use as a BioTile footer.
 */
Ext.define('Admin.view.widgets.SocialBar', {
    extend: 'Ext.Toolbar',
    xtype: 'socialbar',
    border: false,

    layout: {
        pack: 'center'
    },

    defaults: {
        border: false,
        margin: '2 3'
    },

    items: [{
        ui: 'facebook',
        iconCls: 'x-fa fa-facebook',
        handler: 'onContactFacebook'
    }, {
        ui: 'soft-cyan',
        iconCls: 'x-fa fa-twitter',
        handler: 'onContactTwitter'
    }, {
        ui: 'soft-red',
        iconCls: 'x-fa fa-google-plus',
        handler: 'onContactGooglePlus'
    }, {
        ui: 'soft-purple',
        iconCls: 'x-fa fa-envelope',
        handler: 'onContactEmail'
    }]
});
