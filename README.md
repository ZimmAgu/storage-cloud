## Firebase Security Rules

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  	match /{documents=**} {

			// Makes sure the user is authorized
    	function authorized () {
      	return request.auth != null
    	}

			// Makes sure the requested user id is the user that is logged in
    	function matchesUserId (info) {
      	return request.auth.uid == info.userId
    	}
      
      // Makes sure you are not updating the user id
      function notUpdatingId (field) {
      	// If the field is not in request.resource.data then it is not updated
      	return !(field in request.resource.data) || resource.data[field] == request.resource.data[field]
      }
      
    	allow read: if authorized() && matchesUserId(resource.data)
    	allow create: if authorized() && matchesUserId(request.resource.data)
      allow update: if authorized() && matchesUserId(resource.data) && notUpdatingId('userId')
      allow delete: if authorized() && matchesUserId(resource.data)
  	}
  }
}