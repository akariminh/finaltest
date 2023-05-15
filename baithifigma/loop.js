usersData = [{
    userName: "Lelah Nichols",
    userAddress: "Troy, MI",
    image: "./assets/avatar-1.png",
    hobbies1: "clothes",
    hobbies2: "stem"
},
{
    userName: "Jesus Weiss",
    userAddress: "Fort Worth, TX",
    image: "./assets/avatar-2.png",
    hobbies1: "headset",
    hobbies2: "gadget",
    hobbies3: "speed",
    hobbies4: "winter"
},
{
    userName: "Annie Rice",
    userAddress: "Austin, TX",
    image: "./assets/avatar-3.png",
    hobbies1: "road",
    hobbies2: "mountain",
    hobbies3: "trip",
    hobbies4: "earth",
    hobbies5: "nature"
},
{
    userName: "Robert Brower",
    userAddress: "Cincinnati, OH",
    image: "./assets/avatar-4.png",
    hobbies1: "Maintenance",
    hobbies2: "gears",
    hobbies3: "frames",
    hobbies4: "repair",
},
{
    userName: "Amy Campbell",
    userAddress: "Warrior, AL",
    image: "./assets/avatar-5.png",
    hobbies1: "music",
    hobbies2: "disks",
},
{
    userName: "Anthony S. Morin",
    userAddress: "Lyndhurst, NJ",
    image: "./assets/avatar-6.png",
    hobbies1: "vintage",
    hobbies2: "electric",
}]

const initUsersElement = () => {
    const usersDataElement = document.querySelector("#user-list .userCard");
    const processingUsers = usersData.map((user) => {
        const { userName, userAddress, image, hobbies1, hobbies2, hobbies3, hobbies4, hobbies5 } = user;
        return `<div class="myCard">
        <div class="img-container">
            <img src="${image}" alt="">
        </div>
        <div class="user-info">
            <div class="user-name">${userName}</div>
            <div class="user-address">${userAddress}</div>
            <div class="hobbies">
                <span class="hobbies-item">${hobbies1}</span>
                <span class="hobbies-item">${hobbies2}</span>
                <span class="hobbies-item">${hobbies3}</span>
                <span class="hobbies-item">${hobbies4}</span>
                <span class="hobbies-item">${hobbies5}</span>
            </div>
        </div>
    </div>`})
    console.log(processingUsers);
    usersDataElement.innerHTML = processingUsers.join("");
}

initUsersElement();
console.log("JS is linked");