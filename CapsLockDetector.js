Ext.define('Ext.form.field.plugin.CapsLockDetector', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.capslockdetector',

	anchor: 'top',
	width: 300,
	icon: '',
	iconCls: '',
	glyph: '',
	message: '',
	title: '',
		
    /**
     * This method adds capslockdetector to a form field
     *
     * @param field The ext form field cmp
     */
    init: function (field) {
		var me = this,
			fieldListeners = {
				keypress: this.onTextfieldKeyPress,
				scope: me,
				destroyable: true
			};

		// Be sure we are listening to key events
		field.enableKeyEvents = true;
		
		me.fieldListeners = field.on(fieldListeners);
		me.toolTip = undefined;
    },
	
	/**
     * This method shows or hides the tooltip based on capslock status
     *
     * @param field
	 * @param e
     * @param eOpts
     */
	onTextfieldKeyPress: function(field, e, eOpts) {
		var me = this,
			charCode = e.getCharCode();
		
		if((e.shiftKey && charCode >= 97 && charCode <= 122) || (!e.shiftKey && charCode >= 65 && charCode <= 90)) {
			if(me.toolTip === undefined) {
				me.toolTip = Ext.widget({
					xtype: 'quicktip',
					target: field.id,
					anchor: me.anchor,
					anchorOffset: 60,
					width: me.width,
					dismissDelay: 0,
					autoHide: false,
					icon: !Ext.isEmpty(me.icon) ? me.icon : undefined,
					iconCls: !Ext.isEmpty(me.iconCls) ? me.iconCls : undefined,
					glyph: !Ext.isEmpty(me.glyph) ? me.glyph : undefined,
					title: !Ext.isEmpty(me.title) ? me.title : 'Caps Lock is On',
					html: !Ext.isEmpty(me.message) ? me.message : 'Please implement tooltip html'
				});
			}
			
			me.toolTip.show();
		} else {
			if(me.toolTip !== undefined) {
				me.toolTip.hide();
			}
		}
	},
	
	destroy: function() {
        // Remove listeners from field
        Ext.destroy(me.fieldListeners);
    }
});