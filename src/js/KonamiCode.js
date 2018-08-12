(function(root, document, factory) {
    if (typeof define === "function" && define.amd)
        define(["patternmatcher"], factory);
    else root.konamiCode = factory(root.patternMatcher);
})(window, document, function(patternMatcher) {
    return function KonamiCode() {
        return new patternMatcher([
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
            "b",
            "a"
        ]);
    };
});
