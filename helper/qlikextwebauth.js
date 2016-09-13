qlikSenseLogin = function (config, back) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        // Include credentials with request
        req.withCredentials = true;
        req.onload = function (ev) {
            var answer = JSON.parse(req.responseText);
            console.log(answer);
            if (req.status == 200) {
                if (answer.userId) {
                    // If userId is in answer the user is loggedin and promise can be resolved
                    resolve(req.response);
                } else if (answer.loginUri) {
                    // If loginUri is present in answer the user is not logged in and we redirect
                    // to login page aquired from the PersonalAPI for the virtual proxy
                    window.location = answer.loginUri;
                } 
            } else {
                // If status is not 200 reject promise
                reject(Error(req.status + req.response));
            }
        }
        //Build request to PersonalAPI to get information on user
        tmpTargetUri=config.targetUri + "?back=" + back;
        personalUrl = (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "qps/user?targetUri=" + tmpTargetUri;
        req.open('GET', personalUrl);
        req.send();

    })
}
