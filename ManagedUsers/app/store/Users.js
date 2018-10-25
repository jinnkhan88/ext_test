/*
 * File: app/store/Users.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ManagedUsers.store.Users', {
    extend: 'Ext.data.Store',

    requires: [
        'ManagedUsers.model.User',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Users',
            model: 'ManagedUsers.model.User',
            autoLoad: true,
            autoSync: true,
            proxy: {
                type: 'ajax',
                url:'http://localhost:5000/api/users',
                api: {
                    read: 'http://localhost:5000/api/users',
                    create: 'http://localhost:5000/api/users',
  //                  update: 'app.php/users/update',
    //                destroy: 'app.php/users/destroy'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                },
                writer: {
                    type: 'json',
                    successProperty:'success'
                },
                listeners: {
                    exception: function(proxy, response, operation){
                        console.log("errorrr");
                    }
                }
            }
        }, cfg)]);
    }
});
