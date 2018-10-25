/*
 * File: app/view/MainViewController.js
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

Ext.define('ManagedUsers.view.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',


    showPopupFormForUpdate:function(list, location, eOpts,createForm) {

        var title = createForm ? 'Update user' : 'Create user' ;

        var record = '';



        if (createForm){
            //create a blank record

        record = Ext.create("ManagedUsers.model.User", {});
        }else{
            record = location.record;
        }

        Ext.create('Ext.window.Window',{
            title:'Manage Users',
            id:'user_form_modal',
            height:600,
            width:800,
            modal:true,


            items:[{
                xtype:'updaterecordform',
                record: record,
                title:title,
                createUser:createForm,
                viewModel : {
                    data: {
                        user: record
                    }
                }
            }],

        }).show();
    },

    onPopupForm: function(list, location, eOpts) {
        
        this.showPopupFormForUpdate(list,location,eOpts,false);
    },

    createEmployee:function(list, location, eOpts) {

        this.showPopupFormForUpdate(list,location,eOpts,true);


    },


    

});