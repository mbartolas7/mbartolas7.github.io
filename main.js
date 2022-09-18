(function () {
    const image_url = "https://www.gravatar.com/avatar/a28cd32ac570bb3b1fe687d56193ba89?size=500"
    const profileImage = document.getElementById("profileImage")
    profileImage.src = image_url

    fetch("https://api.unsplash.com/collections/_YyEkBmM_Ik/photos?client_id=VLrJYpYpyISvcyynCZYT1yMYh5V-Ki9YKZ0SBZq02zk").then(function(r) {
        r.json().then(function(images) {
            const imagesGrid = document.querySelector("#imagesGrid")

            images.forEach(item => {
                const newItem = document.createElement("li");
                const newItem_img = document.createElement("img")
                newItem.appendChild(newItem_img)
        
                newItem_img.classList.add("itemImage")
                newItem_img.src = item.urls.regular
                
                imagesGrid.appendChild(newItem);
            });
        })
    })
})();