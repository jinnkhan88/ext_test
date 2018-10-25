/*
 * File: app/view/UpdateRecordForm.js
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

Ext.define('ManagedUsers.view.UpdateRecordForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.updaterecordform',

    requires: [
        'ManagedUsers.view.UpdateRecordFormViewModel',
        'ManagedUsers.view.UpdateRecordFormViewController',
        'Ext.field.Text',
        'Ext.Toolbar',
        'Ext.Button'
    ],

    controller: 'updaterecordform',
    viewModel: {
        type: 'updaterecordform'
    },
    centered: false,
    modal: true,
    layout: 'vbox',
    title: 'Update Record',

    config:{
        title:'title',
        createUser:'createUser'
    },

    items: [{
        xtype: 'textfield',
        allowBlank: false,
        required: true,
        label: 'First Name',
        name: 'first_name',
        bind:'{user.firstName}',
        placeholder: 'First Name',
        validators: {
            type: 'length',
            max: 40,
            min: 2
        }
    },
    
    {
        xtype: 'textfield',
        allowBlank: false,
        required: true,
        label: 'Last Name',
        name: 'last_name',
        bind:'{user.lastName}',
        placeholder: 'Last Name',
        validators: {
            type: 'length',
            max: 40,
            min: 2
        }
    },
      
    {
        xtype: 'textfield',
        allowBlank: false,
        required: true,
        label: 'Email',
        name: 'email',
        bind:'{user.email}',
        placeholder: 'Email',
        validators: 'email'
    }
    
    
    , {
        xtype: 'passwordfield',
        allowBlank: false,
        required: true,
        label: 'Password',
        name: 'pass',
        bind:'{user.password}',
        placeholder: 'password',
        validators: {
            type: 'length',
            max: 20,
            min: 6
        }
    }],



    buttons: [{
        handler: 'onLogin',
        iconCls: 'x-fa fa-check',
        text: 'Submit',

    },{
        handler:'onCancel',
        iconCls: 'x-fa fa-close',
        text: 'Cancel',
    }]

});