import angular from "angular";
import "./ept-test-component.less";
/*
	Union between `ept-question` and `ept-test-html`
	interface component{
		type: string, indicates if it is a question or html
			currently, all types are either 'html', or question types 
			such as 'Short_Anwer',
		... //more properties according to type e.g. answers if it is question
	}

*/

export default angular.module("ept.common.directives.'eptTestComponent'",[]).directive('eptTestComponent', [function () {
	return {
		priority: 0,
		template: require('./ept-test-component.html'),
		restrict: 'E',
		scope: {
			component:'=',
			onComponentModified:'&', //expression called with `component` arg
			onComponentDeleted:'&', //same as ^
			onResponseChanged:'&', //for question-only, see ept-question
			componentNum:'=', //required if question
			isAdmin:'=' //whether components should be editable
		},
		controller: function($scope, $element, $attrs) {

		},
		link: function postLink($scope, iElement, iAttrs) {
			$scope.isHtml = function(){
				return $scope.component.type === "html";
			};

			$scope.onComponentDeletedCallback = function(){
				if($scope.onComponentDeleted)$scope.onComponentDeleted({
					component:$scope.component
				});
			};
			$scope.$watch("component",function(newval,oldval){
				if($scope.onComponentModified 
					&& newval !== oldval)$scope.onComponentModified({
					component:$scope.component
				});
			},true);
			$scope.onResponseChangedCallback = function(){
				if($scope.onResponseChanged)$scope.onResponseChanged({
					component:$scope.component
				});
			};
		}
	};
}]).name;