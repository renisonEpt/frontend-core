import angular from 'angular';
import 'angular-modal-service';

/*
	for documentation, see: https://github.com/dwmkerr/angular-modal-service
*/

var angularModalService = 'angularModalService'; // name of module
export default angular.module('ept.common.BaseModalService',[angularModalService])
.service('BaseModalService',['ModalService',function(ModalService){
	/*
		example inputs:{
			modalTitle:'hello',
			cancelText:'cancel',
			confirmText:'ok',
			modalBody:'<p>hi there </p>'
		}
	*/
	var confirmController = ['$scope','close','modalTitle',
	'modalBody','confirmText','cancelText',
		function($scope,close,modalTitle,modalBody,confirmText,cancelText){
				$scope.close = function(result){
					close(result,200);
				};
				$scope.modalTitle = modalTitle;
				$scope.modalBody = modalBody;
				$scope.confirmText = confirmText;
				$scope.cancelText = cancelText;
			}];
	this.confirm = function(options){
		var defaultInputs = {
			confirmText:'ok',
			cancelText: 'cancel',
			modalTitle: 'Confirming'
		};
		var inputs = angular.merge(defaultInputs,options);
		// return the promise
		return ModalService.showModal({
			//load template directly thru webpack
			template: require('../partials/modals/confirm.html'),
			controller: confirmController,
			inputs: inputs
		}).then(function(modal){
			console.log(modal);
			modal.element.modal(); //display
			 // return a promise that resolves the result (true/false)
			return modal.close;
		});
	};
	// this.alert = function(inputs){
	// 	return ModalService.showModal({
	// 		template: require('../partials/modals/alert.html')
	// 	});
	// };
}])
.name;