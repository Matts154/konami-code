(function(root, document, factory) {
    if (typeof define === "function" && define.amd) define(factory);
    else root.patternMatcher = factory();
})(window, document, function() {
    var self = this;
    self.inputHistory = [];
    self.promise;
    self.pattern;

    function app(resolve, reject) {
        function keyUpHandler(event) {
            var isInPattern = self.pattern.indexOf(event.key) > -1;

            if (isInPattern) {
                self.inputHistory.push(event.key);

                if (event.key === pattern[pattern.length - 1]) {
                    validate();
                }
            } else {
                reset();
            }
        }

        function reset() {
            self.inputHistory = [];
        }

        function validate() {
            var isMatch = self.inputHistory.every(function(value, i) {
                return value === pattern[i];
            });

            if (isMatch) resolve();

            reset();
        }

        document.addEventListener("keyup", keyUpHandler);
    }

    return function PatternMatcher(pattern) {
        self.pattern = pattern;
        return new Promise(app);
    };
});
