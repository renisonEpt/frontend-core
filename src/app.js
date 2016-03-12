import 'bootstrap/dist/css/bootstrap.css';
import 'xeditable/xeditable.css'
import angular from 'angular';
import uirouter from 'angular-ui-router'; // by  default importing angular-ui-router would not 
// return an object, but would rather return the name of the module 'ui.router'
// so that we can directly include it in angular.module

import routing from './app.config';
import home from 'home';
import xeditable from "xeditable/xeditable.js";
import basicTest from "basic-test";
import all from "./index.js";
angular.module('app', [uirouter, home,'xeditable',basicTest,all])
  .config(routing);

