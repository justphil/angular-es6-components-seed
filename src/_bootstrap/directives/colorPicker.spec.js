import angular from 'angular';
import 'angular-mocks';

xdescribe('colorPicker directive', function() {
    let $compile, $rootScope;

    const tpl = `<color-picker init-r="{{ mainCtrl.r }}"
                      init-g="{{ mainCtrl.g }}"
                      init-b="{{ mainCtrl.b }}"
                      on-color-change="mainCtrl.onColorChange(r, g, b)"></color-picker>`;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should do something meaningful', function() {
        const parentScope = $rootScope.$new();
        parentScope.mainCtrl = {
            r: 1,
            g: 2,
            b: 3,
            onColorChange: function(r, g, b) {}
        };
        const jqElem = $compile(tpl)(parentScope);
        parentScope.$apply();

        expect(jqElem.find('div').length).toBe(1);
    });
});
