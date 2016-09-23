# Qlik Sense Mashup Authentication

##State:
Beta

##Description:
This code is examples of how Qlik Sense Mashup authentication can be solved. 
The project containts two examples the raw does not use any help and the helper
contains a more structured approach with additional flexibility.

##Installation:
* Configure the header and white list of the virtual proxy to use
* Create a content library and upload the mashupredirectexample.js
* Put the JavaScript helper files on the webserver
* Change the load statement in the HTML file that loads require.js to load from Qlik Sense
* Add login code the HTML file of the mashup
* Update the config.js file to match your setup
* Put your mashup in a JavaScript function