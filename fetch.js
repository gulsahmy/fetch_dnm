
console.log("FETCH");

let userData = ""

fetch("https://api.github.com/users")
.then((res) => {
    console.log(res)
    if(!res.ok) {
        throw new Error(`Something went wrong ${res.status}`)
    }
    return res.json()
})
.then((data) => {
    console.log(data)
    userData = data
    console.log(userData);
    showUser(data)
})


.catch((err) => document.write(err))

const showUser = (data) => {
    console.log(data)
    const usersSection = document.getElementById("users")
    console.log(usersSection)

    data.forEach(user => {
        const userDiv = `<div class = "user">
        <p> avatar_url: ${user.avatar_url}</p> </div>`;
        usersSection.innerHTML += userDiv;
    })
}