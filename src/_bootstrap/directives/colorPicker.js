export default function colorPicker() {
    // Directive Definition Object
    return {
        restrict: 'E', // E = element
        templateUrl: 'templates/_bootstrap/directives/colorPicker.tpl.html',
        scope: {
            r: '@initR',
            g: '@initG',
            b: '@initB',
            onColorChange: '&'
        },
        link: function(scope, jqElem, attrs) {
            console.log('colorPicker instance created', attrs);

            ['r', 'g', 'b'].forEach(function(color) {
                scope.$watch(color, function() {
                    scope.onColorChange({
                        r: scope.r, g: scope.g, b: scope.b
                    });
                });
            });
        }
    };
}
