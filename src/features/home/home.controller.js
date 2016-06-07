export default class HomeController {
  constructor($filter) {
    this.name = 'World';
    this.user = {
        status: 2
      }; 

    this.statuses = [
      {value: 1, text: 'status1'},
      {value: 2, text: 'status2'},
      {value: 3, text: 'status3'},
      {value: 4, text: 'status4'}
    ]; 
    this.$filter = $filter;
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
  }

  showStatus() {
      var selected = this.$filter('filter')(this.statuses, {value: this.user.status});
      return (this.user.status && selected.length) ? selected[0].text : 'Not set';
  }
}

HomeController.$inject = ['$filter'];
