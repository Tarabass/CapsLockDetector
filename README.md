# Caps Lock Detector
__*Detects if caps lock is on while typing in textfields*__

##What is Caps Lock Detector
Caps Lock Detector is a plugin for textfields which will detect if caps lock is on while the user is typing. If caps lock is on Caps Lock Detector shows a warning to help users prevent wrong input. This can be very useful for password fields for example. Caps Lock Detector is configurable so programmers can set the warning text, can add an icon class and much more.

###Installation
1. Place the plugin somewhere in your workspace/app
2. Change the namespace as you wish
3. Add the namespace to the requires array of the view from where you want to use Caps Lock Detector
4. Create a plugin array from within the config of a textfield and configure the plugin

###Usage
	requires: [
		'Ext.form.field.plugin.CapsLockDetector'
	],

	...

	{
		xtype: 'textfield',
		name: 'password',
		inputType: 'password',
		plugins: [{
			ptype: 'capslockdetector',
			title: 'Caps lock is on',
			html: 'Having caps lock on may cause you to enter your password incorrectly.'
		}]
	}

###Configs
**anchor**

If specified, indicates that Caps Lock Detector should be anchored to a particular side of the target element ("top", "right", "bottom", or "left"), with an arrow pointing back at the target.

**glyph**

A numeric unicode character code to use as the icon for the header of Caps Lock Detector. For example '65@My Font Family'.

**icon**

Path to image for an icon in the header. Used for displaying an icon to the left of a title.

**iconCls**

CSS class for an icon in the header. Used for displaying an icon to the left of a title.

**message**

Message to show at the use while caps lock is on.

**title**

Title to show in the header of Caps Lock Detector.

**width**

Default to 300.


###Known issues
1. Needs to be tested in older versions of ExtJs
2. Needs to be tested in several environments

###The MIT License (MIT)
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

###Contact
@Tarabass

https://github.com/Tarabass
##
***Copyright (c) 2014 Peter Rietveld***
