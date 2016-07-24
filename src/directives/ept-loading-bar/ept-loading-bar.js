import angular from "angular";
require('./ept-loading-bar.less');
export default angular.module("ept.common.directives.eptLoadingBar",[]).directive('eptLoadingBar', [function () {
	return {
		priority: 0,
		template: require('./ept-loading-bar.html'),
		transclude: true,
		restrict: 'E',
		scope: {
			cssClass:"=class" //optional css class
		},
		controller: function($scope, $element, $attrs) {},
		link: function postLink(scope, iElement, iAttrs) {

		}
	};
}]).name;