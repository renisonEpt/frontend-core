import './ept-namecard.less';
import angular from "angular";
/*

*/



export default angular.module("ept.common.directives.eptNamecard",[]).directive('eptNamecard', [function () {
    return {
        priority: 0,
        template: require('./ept-namecard.html'),
        restrict: 'E',
        scope: {
            name:'=',
            cssClass:'=class',
        },
        controller: function($scope, $element, $attrs) {
        },
        link: function postLink($scope, iElement, iAttrs) {
            
        }
    };
}]).name;