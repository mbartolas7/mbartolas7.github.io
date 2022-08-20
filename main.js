(function () {
    const profile_url = "http://fr.gravatar.com/mathias6120.json"

    fetch(profile_url).then(function(response) {
        response.json().then(data => {
            const image_url = data.entry[0].thumbnailUrl + "?size=500"
            const profileImage = document.getElementById("profileImage")
            profileImage.src = image_url
        })
    })  
})();