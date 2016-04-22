export default function messageDialog() {
    // DDO
    return {
        restrict: 'E',
        templateUrl: 'templates/_bootstrap/directives/messageDialog.tpl.html',
        transclude: true,
        scope: {
            visible: '=',
            title: '=',
            onYes: '&',
            onNo: '&'
        }
    };
}
