// this is a hack!!
// see https://github.com/fraywing/textAngular/issues/1056
(() => {
  window.taTools = {};
  window.rangy = require('rangy/lib/rangy-core');
})();
require('rangy/lib/rangy-selectionsaverestore');
require('textangular/dist/textAngular-sanitize');
require('textangular/dist/textAngularSetup');
require('textangular/dist/textAngular');
import "textangular/dist/textAngular.css";
export default "textAngular";
