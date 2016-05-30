// this is the main entry point for modules requiring core module
import 'bootstrap/dist/css/bootstrap.css';
// import 'jquery';
// import 'materialize-css';
// import 'materialize-css/bin/materialize.css';
import './lib/xeditable/xeditable.css';
import angular from 'angular';
import directives from "./directives";
import services from "./services";
export default angular.module('ept.common', [directives,services]).name;
