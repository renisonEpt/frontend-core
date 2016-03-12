import angular from "angular";
import QuestionType from "question-type.js";
import ComponentType from "component-type.js";
import eptTestComponent from "../ept-test-component/ept-test-component.js";
/*
	@components:component[]
	component: see @ept-test-component
	
	//angular expressions to be passed in, will be given the Component obj
	@onComponentCreated(Component) 
	@onComponentDeleted(Component)
	@onComponentModified(Component)
*/
export default angular.module("ept.common.directives.eptTestComponentGroup",[eptTestComponent]).directive('eptTestComponentGroup', [function() {
	//see angular expression, the scope '&' symbol for details
	function makeComponentCallback(angularExpression) {
		return function(component) {
			if (angularExpression) angularExpression({
				component: component
			});
		}
	}

	function makeNewComponent(type){
		switch(type){
			case QuestionType.MULTIPLE_CHOICE:
				return {
					content:"New multiple choice question here...",
					type:type,
					answers:[{
						content:"First new answer, I am selected thus the correct answer",
						isCorrect:true
					},{
						content:"Second new answer here ...",
						isCorrect:false
					},{
						content:"Third new answer here ...",
						isCorrect:false
					},{
						content:"Fourth new answer here ...",
						isCorrect:false
					}]
				};
			case QuestionType.TRUE_FALSE:
				return {
					content:"New true false question here... true is by default correct",
					type:type,
					answers:[{
						content:"true",
						isCorrect:true
					},{
						content:"false",
						isCorrect:false
					}]
				};
			case QuestionType.SHORT_ANSWER:
				return {
					content:"New short answer here ... ",
					type:type,
					answers:[{
						content:"First new answer here ...",
						isCorrect:true
					}]
				};
			case QuestionType.FREE_TEXT:
				return {
					content:"New free text here ... no answer needed",
					type:type
				};
			case ComponentType.COMP_HTML:
				return{
					content:"<h1>You can edit me! in WYSIWYG style!</h1>",
					type:type
				};
			default:
				throw "cannot make unsupported question type " + type;
		}
	}

	return {
		priority: 0,
		template: require('./ept-test-component-group.html'),
		restrict: 'E',
		scope: {
			components: '=',
			onComponentCreated: "&",
			onComponentDeleted: "&",
			onComponentModified: "&"
		},
		controller: function($scope, $element, $attrs) {
		},
		link: function postLink($scope, iElement, iAttrs) {
			$scope.onComponentCreatedCallback =
				makeComponentCallback($scope.onComponentCreated);
			$scope.onComponentDeletedCallback =
				makeComponentCallback($scope.onComponentDeleted);
			$scope.onComponentModifiedCallback =
				makeComponentCallback($scope.onComponentModified);

			// intended to be called BEFORE component created
			function onComponentCreate(index,type){
				var newComponent = makeNewComponent(type);
				//Component created
				$scope.onComponentCreatedCallback(newComponent);
				$scope.components.splice(index+1,0,newComponent);
			}

			// intended to be called BEFORE component deleted
			$scope.onComponentDelete = function (component){
				$scope.onComponentDeletedCallback(component);
				var index = $scope.components.indexOf(component);
				$scope.components.splice(index,1);
			};


			$scope.toolbarActions = [{
				iconClass: "fa fa-dot-circle-o",
				text: "Mutiple Choice",
				onAction: function(context) {
					//context in this case is the index of the question to be inserted
					onComponentCreate(context,QuestionType.MULTIPLE_CHOICE);
				}
			}, {
				iconClass: "fa fa-check",
				text: "True False",
				onAction: function(context) {
					onComponentCreate(context,QuestionType.TRUE_FALSE);
				}
			}, {
				iconClass: "fa fa-pencil",
				text: "Free Text",
				onAction: function(context) {
					onComponentCreate(context,QuestionType.FREE_TEXT);
				}
			}, {
				iconClass: "fa fa-square-o",
				text: "Short Answer",
				onAction: function(context) {
					onComponentCreate(context,QuestionType.SHORT_ANSWER);
				}
			},{
				iconClass:"fa fa-file-o",
				text:"Paragraph",
				onAction:function(context){
					onComponentCreate(context,COMP_HTML);
				}
			}];

		}
	};
}]).name;