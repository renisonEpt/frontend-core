import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import BaseModalService from '../../services/BaseModalService';
export default angular.module('app.home', [uirouter,BaseModalService])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
