document.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if(name.length < 3){
        alert("Nama mesti sekurang-kurangnya 3 aksara");
        return;
    }

    if(email === ""){
        alert("Email diperlukan");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // 🔥 START ID SYSTEM (11 ke atas)
    let lastId = localStorage.getItem("lastId");

    if(!lastId){
        lastId = 10; // API jsonplaceholder habis 1-10
    } else {
        lastId = parseInt(lastId);
    }

    const newId = lastId + 1;

    const newUser = {
        id: newId,
        name: name,
        email: email
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("lastId", newId); // simpan last ID

    alert("Pendaftaran berjaya! ID anda: " + newId);

    document.getElementById("registerForm").reset();
});