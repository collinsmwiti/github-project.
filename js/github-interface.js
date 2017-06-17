//this is a code used to display repos within the website//
var displayData = function(repos) {
  $('ul#repoUrl').empty();
  repos.forEach(function(repo) {
    $('ul#repoUrl').append("<li><a href='" + repo.html_url + "'>" + repo.name + "</a>: " + repo.description + "; created on " + repo.created_at + "</li > ");
  });
};

// front-end part for getting users and repos details//
$(document).ready(function() {
  var searchUsers = new Repos();
  $('#searchName').click(function() {
    //get input value
    var name = $('#userName').val();
    // $('#userPic').val("");
    console.log(name);
    searchUsers.getUser(name, displayUser);
    searchUsers.getRepos(name, displayData);
  });
});
