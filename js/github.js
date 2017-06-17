//used to access the apiKey
var apiKey = require('./../.env').apiKey;



// This is a function created to enhance repo access to the prototype//
Repos = function() {

};

// This is a prototype to enable the repository access //
Repos.prototype.getRepos = function(name, displayFunction) {
  $.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function(repos) {
    displayFunction(repos);
  }).fail(function(error) {
    $('.showUser').text("This Username " + name + " is " + error.responseJSON.message + "." +
      "Please Enter the Correct Userrepository");
  });
};

//used for exports.getRepos = Repos;
exports.reposModule = Repos;
