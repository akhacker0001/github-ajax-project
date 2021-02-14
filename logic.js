
const APIURL = 'https://api.github.com/users/';
const repo = '/repos?sort=created';
const search = document.querySelector("input");
const button = document.querySelector("button");
const htmlData = document.querySelector(".profile")
const repositery = document.querySelector(".repositery");

button.addEventListener("click",function(){
    var screenValue = search.value;
    var request = new XMLHttpRequest();
    request.open('GET',APIURL + screenValue + repo);
    request.send();
    request.addEventListener("load",function(){
        const data = JSON.parse(this.responseText)
        // console.log(data)
        profile(screenValue)
        const html = `
        <p><a  id="a" href="${data[0].html_url}">${data[0].name}</a></p>
          <p><a id="a" href="${data[1].html_url}">${data[1].name}</a></p>
          <p><a id="a" href="${data[2].html_url}">${data[2].name}</a></p>
          <p><a id="a" href="${data[3].html_url}">${data[3].name}</a></p>
          <p><a id="a" href="${data[4].html_url}">${data[4].name}</a></p>`
        
       repositery.insertAdjacentHTML("afterbegin",html)

    })
})

    
    


function profile(repositery) {

    var request = new XMLHttpRequest();
    request.open('GET',APIURL + repositery );
    request.send();
    request.addEventListener("load",function(){
        const profile = JSON.parse(this.responseText)
        // console.log(profile)

        const html = `
        <img src="${profile.avatar_url}" alt="">
        <h3 id="followers" >followers <span>${profile.followers}</span></h3>
        <h3 id="following" >following  <span>${profile.following}</span></h3>
        <h2>${profile.name}</h2>
        <a id="view-profile" href="${profile.html_url}">view profile</a>
        `
        htmlData.insertAdjacentHTML("afterbegin",html)

    })

    
}




