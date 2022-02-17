const baseURL = ("https://www.adoptapet.com/public/apis/pet_list.html")
.then(function(response) {
    return response.json();
    })
    .then(function(json) {
        console.log(json)

    })
