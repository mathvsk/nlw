    /* function showMeSomething(dado) {
      alert(dado)
    }
     showMeSomething(socialMedia.twitter) */

     const socialMedia = {
      github: "mathvsk",
      instagram: "mathvsk",
      twitter: "mathvsk",
    }
    
    function changeName () {
      // document.getElementById("userName").textContent = "Matheus Igor Viscki" //

      // Mesma coisa que o modelo de cima, mas de uma forma mais simplicada (Somente utilizando ID pode ser escrito dessa forma) //
      userName.textContent = "Matheus Igor Viscki"
    }

    function changeSocialMediaLinks () {
      for (let li of socialLinks.children) {
        const social = li.getAttribute("class")

        li.children[0].href = `https://${social}.com/${socialMedia[social]}` 
      }
    }
    
    changeName()
    changeSocialMediaLinks()

    function getGithubProfileInfos () {
      const url = `https://api.github.com/users/${socialMedia.github}`

      fetch(url).then(response => response.json())
      .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        linkGithub.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
      })
    }

    getGithubProfileInfos()