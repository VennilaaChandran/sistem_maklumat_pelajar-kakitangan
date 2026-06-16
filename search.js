async function getUsers(){

    const userList = document.getElementById("userList");

    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const apiUsers = await response.json();

        const localUsers =
            JSON.parse(localStorage.getItem("users")) || [];

        // 🔥 RESET ID API jadi 1-10 sahaja
        const fixedApiUsers = apiUsers.map((user, index) => ({
            id: index + 1,
            name: user.name,
            email: user.email
        }));

        // 🔥 LOCAL USER START 11++
        const fixedLocalUsers = localUsers.map((user, index) => ({
            id: index + 11,
            name: user.name,
            email: user.email
        }));

        const allUsers = [...fixedApiUsers, ...fixedLocalUsers];

        userList.innerHTML = "";

        allUsers.forEach(user => {
            userList.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
            `;
        });

    }catch(error){
        alert(error.message);
    }
}

window.onload = getUsers;