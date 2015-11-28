app.factory('pollF', ['$http','authF',function($http,authF){
  var o = {};
    
  o.polls=[];//["which is better","which is longe rdfbmfdbdfbdfbdf bfxbfdgndddddfxgn?"];
  
  /*
  o.getAll = function() {
    return $http.get('/polls').success(function(data){
      angular.copy(data, o.polls);
    });
  }; 
  */
    o.getAllPolls = function() {
        return $http.get('/polls',{
            headers: {Authorization: 'Bearer '+authF.getToken()}
        }).success(function(data){
            angular.copy(data, o.polls);
        });
    };     
    
    o.createPoll = function(poll) {
        return $http.post('/polls', poll, {
            headers: {Authorization: 'Bearer '+authF.getToken()}
        });          
    };
    
    o.getPoll = function(id) {
        return $http.get('/polls/' + id).then(function(res){
            console.log("res= "+JSON.stringify(res.data));
            return res.data;
        });
    };
    
    o.deletePoll = function(id) {
        return $http.delete('/polls/' + id,{
            headers: {Authorization: 'Bearer '+authF.getToken()}
        });
    };
  /*    
  o.upvote = function(poll) {
    return $http.put('/polls/' + poll._id + '/upvote')
    .success(function(data){
      poll.upvotes += 1;
    });
  };

    
  
  o.addComment = function(id, comment) {
    return $http.poll('/polls/' + id + '/comments', comment);
  };
  
    
  o.votePoll = function(poll, comment) {
    return $http.put('/polls/' + poll._id + '/comments/'+ comment._id +       '/upvote')
    .success(function(data){
      comment.upvotes += 1;
    });
  };    
*/     
  return o;
}]);