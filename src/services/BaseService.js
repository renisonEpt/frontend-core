import angular from 'angular';

// BaseService.$inject = ['$http','$cookies'];
class BaseService {
  constructor($http,$cookies) {
    this.BASE_URL  = "http://localhost:8080/api";
    this.$http = $http;
    this.$cookies = $cookies;
  }
  setLoginToken(token){
    this.$cookies.put("loginToken",token,{
                expires:new Date(Date.now() + 120*60*1000) //expires in 120 minutes
            });
  }
  request(method,path,body){
    var loginToken = this.$cookies.get("loginToken")

    return this.$http({
      method:method,
      url:this.BASE_URL + path,
      headers:{
        "ept-login-token":loginToken,
        "Content-Type":"application/json"
      },
      data:body
    }).then(function(response){ //upon response success, return only the body;
      return response.data;
    });
  }
  post(path,body){
    return this.request("POST",path,body);
  }
  get(path){
    return this.request("GET",path,null);
  }
  put(path,body){
    return this.request("PUT",path,body);
  }
  patch(path,body){
    return this.request("PATCH",path,body);
  }
  delete(path){
    return this.request("DELETE",path);
  }
}

export default angular.module('ept.common.BaseService', [])
  .service('BaseService', ['$http','$cookies',BaseService])
  .name;
