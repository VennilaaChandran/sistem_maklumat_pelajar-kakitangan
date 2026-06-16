document.getElementById("loginForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();

    if(email === ""){
        alert("Sila masukkan email");
        return;
    }

    try{

        // Semak pengguna API
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const apiUsers = await response.json();

        const apiUser = apiUsers.find(
            user => user.email.toLowerCase() === email.toLowerCase()
        );

        // Semak pengguna yang daftar sendiri
        const localUsers =
            JSON.parse(localStorage.getItem("users")) || [];

        const localUser = localUsers.find(
            user => user.email.toLowerCase() === email.toLowerCase()
        );

        if(apiUser || localUser){

            const currentUser = apiUser || localUser;

            localStorage.setItem(
                "currentUser",
                JSON.stringify(currentUser)
            );

            alert("Log masuk berjaya!");

            window.location.href = "search.html";

        }else{

            alert("Pengguna tidak dijumpai!");

        }

    }catch(error){

        alert("Ralat: " + error.message);

    }

});