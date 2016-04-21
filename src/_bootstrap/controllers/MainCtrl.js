export default function MainCtrl() {
    'ngInject';
    this.r = 100;
    this.g = 0;
    this.b = 255;

    this.onColorChange = function(r, g, b) {
        console.log('onColorChange() called', r, g, b);
    };
}
