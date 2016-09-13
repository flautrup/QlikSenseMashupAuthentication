  //Configuration file that creates configuration for mashup, mashupredirectexample and qlikextwebauth  
  var config = {
        // Host name of Qlik Sense server
        host: "rd-flp-51.rdlund.qliktech.com",
        //Virtual proxy to use with mashup
        prefix: "/db/",
        //Port to use on Qlik Sense server
        port: "80",
        //Using TLS for encryption or not
        isSecure: false,
        //targetUri is the page to redirect to after successfull authentication for ticket consumption
        targetUri: "http://rd-flp-51.rdlund.qliktech.com/db/content/PersonalAPI/mashupredirectexample.html",
        //sourceUri is the page that mashupredirectexample.html should redirect back to
        sourceUri: "http://10.88.148.230:3000/helper/MashupAuthenticationExample.html"
    };