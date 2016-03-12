import './ept-action-group.less';
import angular from "angular";
/*
	@actions:optional [action ...]
		action{ 
			class
			iconClass
			text
			onAction: function
		}

*/


export default angular.module("ept.common.directives.eptActionGroup",[])
.directive('eptActionGroup', [function () {
	return {
		priority: 0,
		template: require('./ept-action-group.html'),
		restrict: 'E',
		scope: {
			actions:"=",
			cssClass:"="
		},
		controller: function($scope, $element, $attrs) {
		},
		link: function postLink($scope, iElement, iAttrs) {
		}
	};
}]).name;