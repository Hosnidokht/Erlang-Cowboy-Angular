// Generated by CoffeeScript 1.8.0
(function() {
  var EditUserCtrl;

  EditUserCtrl = (function() {
    function EditUserCtrl($log, $location, UserService, $routeParams) {
      this.$log = $log;
      this.$location = $location;
      this.UserService = UserService;
      this.$routeParams = $routeParams;
      this.$log.debug("constructing EditUserController");
      this.user = {};
      this.findUser();
    }

    EditUserCtrl.prototype.findUser = function() {
      this.$log.debug("findUser()");
      return this.UserService.findUser(this.$routeParams.firstname).then((function(_this) {
        return function(data) {
          _this.$log.debug("Promise returned " + data + " User");
          return _this.format(data, _this.user);
        };
      })(this), (function(_this) {
        return function(error) {
          return _this.$log.error("Unable to Find User: " + error);
        };
      })(this));
    };

    EditUserCtrl.prototype.format = function(data, user) {
      return angular.forEach(data, (function(_this) {
        return function(userValueArray) {
          user.id = userValueArray[0];
          user.firstname = userValueArray[1];
          user.lastname = userValueArray[2];
          user.mobileNo = userValueArray[3];
          return user.age = userValueArray[4];
        };
      })(this));
    };

    EditUserCtrl.prototype.updateUser = function() {
      this.$log.debug("updateUser()");
      return this.UserService.updateUser(this.user).then((function(_this) {
        return function(data) {
          _this.$log.debug("Promise returned " + data + " User");
          _this.user = data;
          return _this.$location.path("/users");
        };
      })(this), (function(_this) {
        return function(error) {
          return _this.$log.error("Unable to update User: " + error);
        };
      })(this));
    };

    return EditUserCtrl;

  })();

  controllersModule.controller('EditUserCtrl', EditUserCtrl);

}).call(this);