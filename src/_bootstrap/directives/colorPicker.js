export default function colorPicker() {
    // Directive Definition Object
    return {
        restrict: 'E', // E = element
        templateUrl: 'templates/_bootstrap/directives/colorPicker.tpl.html',
        scope: {
            r: '=initR', // = two way data binding
            g: '=initG',
            b: '=initB'
        }
    };
}
