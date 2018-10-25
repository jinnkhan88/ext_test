(function() {
    // Local runner hooks into window.Cmd object as well
    var isNativeCmd = window.Cmd && window.Cmd['native'],
        jasmine = this.jasmine,
        env = jasmine.getEnv();
    
    if (!/local\-reporter=false/i.test(top.location.search)) {
        env.addReporter(parent.Test.SandBox.reporter);
    }
    
    if (isNativeCmd) {
        jasmine.CI_ENVIRONMENT = true;
    }
    
    if (jasmine.CI_ENVIRONMENT || isNativeCmd) {
        jasmine.DEBUGGING_MODE = false;
        jasmine.VERBOSE = false;
        jasmine.CATCH_EXCEPTIONS = true;
        jasmine.DEFAULT_WATCHDOG_INTERVAL = 90000;
        jasmine.CAPTURE_CALL_STACK = false;
        jasmine.KEEP_PASSED_RESULTS = false;
    }
    
    if (isNativeCmd) {
        top.Cmd = Cmd;
        
        // Android does not have maxTouchPoints, so it will fail feature detection.
        // We can't use presence of methods because they are there on desktop browsers.
        // So if Android, we assume touch is used.
        jasmine.supportsTouch = jasmine.supportsTouch || Ext.isAndroid;
        
        env.addReporter(new Cmd.jasmine.Reporter());
        
        // Firefox driver keeps the focus in the address bar after driver.get(url), which 
        // causes many specs to fail, so we click on a focusable element to workaround
        // this behavior
        // https://code.google.com/p/selenium/issues/detail?id=8100
        Cmd.native.click(top.document.getElementById('collapseAll'));
        
        Cmd.native.switchTo({frame: 'sandbox'}, function() {
            env.execute();
        });
    }
    else {
        env.execute();
    }
})();
