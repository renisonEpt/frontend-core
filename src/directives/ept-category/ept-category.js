import "./ept-category.less";
import angular from "angular";
import xeditable from "xeditable/xeditable.js";
import eptActionGroup from "ept-action-group/ept-action-group.js";

/*
	@category{
		name: "text"
		timeAllowed: number
	}
	@onDeleted: angular expression
	@actions: []action see `ept-action-group`
		this array will be concatenated with the default actions
*/
export default angular.module("ept.common.directives.ept-category",[xeditable,eptActionGroup]).directive('eptCategory', [function() {
	return {
		priority: 0,
		template: require('./ept-category.html'),
		// replace: true,
		transclude: true,
		restrict: 'E',
		scope: {
			// name:'=',
			// length:"=",
			category: '=',
			cssClass: "=class",
			onDeleted: '&',
			actions: '=?',
			components:"="
		},
		controller: function($scope, $element, $attrs) {},
		link: function postLink($scope, iElement, iAttrs) {
			$scope.folded = true;
			function toggleFolded(){
				$scope.folded != $scope.folded;
			}
			function onDeleteCallback() {
				$scope.onDeleted();
			};

			//default actions
			$scope.categoryActions = [{
				iconClass: "fa fa-trash",
				onAction: onDeleteCallback
			}];
			// watch for any change in actions, update as neccessary
			$scope.$watch("actions", function(newval) {
				if (typeof newval !== "undefined" &&
					newval.length > 0) {
					$scope.categoryActions.concat(newval);

				}
			}, true);

			if ($scope.components && $scope.components.legnth > 0){
				$scope.categoryActions.push({
					iconClass:{
						"fa fa-chevron-up":$scope.folded,
						"fa fa-chevron-down":!$scope.folded
					},
					onAction: toggleFolded
				})
			}
		}
	};
}]).name;