/*
 * File: app/view/FilterFormViewController.js
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

Ext.define('MyApp.view.FilterFormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.filterform',

    /* This function is called using default config which assings configs to all the items */
    onFilterChange: function() {
        let devsStore = Ext.first('#devList').getStore(),
             vm = this.getViewModel(),
             allFilters = ['extjs', 'touch', 'architect', 'themer', 'inspector'],
             filters = [];

        // collect up an array of checked checkboxes
        Ext.each(allFilters, function(item) {
            if (vm.get(item)) {
                filters.push(item);
            }
        });

        // clear any filtering on the Store
        devsStore.clearFilter();


        // filter the developers Store using only the checked filters
        devsStore.filterBy(function(rec) {
            let skills = Ext.Array.map(rec.get('skills'), function(item) {
                return item.toLowerCase().replace(/ /g, '');
            });

            return Ext.Array.intersect(filters, skills).length;

        });

    },

    onCloseButtonTap: function(button, e, eOpts) {
        this.getView().hide();
    },

    onCheckboxChange4: function(checkbox, newValue, oldValue, eOpts) {
        this.onFilterChange();
    },

    onCheckboxChange3: function(checkbox, newValue, oldValue, eOpts) {
        this.onFilterChange();
    },

    onCheckboxChange2: function(checkbox, newValue, oldValue, eOpts) {
        this.onFilterChange();
    },

    onCheckboxChange1: function(checkbox, newValue, oldValue, eOpts) {
        this.onFilterChange();
    },

    onCheckboxChange: function(checkbox, newValue, oldValue, eOpts) {
        this.onFilterChange();
    }

});