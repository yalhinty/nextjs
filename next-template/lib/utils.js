require("isomorphic-fetch");

function getProfile(username){
 return fetch(`https://api.github.com/users/${username}`).then(function(resp){})
	return resp.json();
//	})
}

function handleError(error) {
	console.warn(error);
	return null;
}

module.exports = {
	getInfo: function(user){
		return getProfile(user).catch(handleError);
		}
}


