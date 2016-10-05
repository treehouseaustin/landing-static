require('./style/importer.scss');

import '@treehouse/ui';
import './controllers/hello.controller';

angular.module('TreeHouse', [
  'TreeHouse.controller.hello',
  'treehouse.ui.directives',
  'treehouse.ui.marketing',
  'treehouse.ui.services'
]).run(['$timeout', function($timeout) {
  $timeout(() => $(document).foundation());
}]);
