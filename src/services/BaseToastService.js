import angular from 'angular';
import 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.min.css';
var angularToastr = 'toastr';
/*
	for documentation, see: https://github.com/Foxandxss/angular-toastr
	see source here for examples https://foxandxss.github.io/angular-toastr/
	toastrConfig options: 
	options = {
			autoDismiss: false,
			position: 'toast-top-right',
			type: 'success',
			timeout: '3000',
			extendedTimeout: '1000',
			html: false,
			closeButton: false,
			tapToDismiss: true,
			progressBar: false,
			closeHtml: '<button>&times;</button>',
			newestOnTop: true,
			maxOpened: 0,
			preventDuplicates: false,
			preventOpenDuplicates: false
		};
*/

export default angular.module('ept.common.BaseToastService',[angularToastr])
.service('BaseToastService',['ModalService','$sanitize', 'toastr', 'toastrConfig',
	function(ModalService,$sanitize,toastr,toastrConfig){
		var BaseToastService = this;
		//default setting
		toastrConfig.timeOut = '3000';

		BaseToastService.error = function(message,title){
			toastr['error'](message,title || 'Oops');
		};

		BaseToastService.warn = function(message,title){
			toastr['warning'](message,title || 'Warning');
		};
	}])
.name;