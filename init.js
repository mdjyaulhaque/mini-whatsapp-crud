const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("Connection successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "Sahil",
        to: "Manoj",
        message: "Hi, Paisa wapas kar do",
        created_at: new Date(),
    },
    {
        from: "Aryan",
        to: "Yasir",
        message: "Hi, college kab chalega",
        created_at: new Date(),
    },
    {
        from: "Hasnain",
        to: "Aryan",
        message: "Parcel, received kar lena",
        created_at: new Date(),
    },
    {
        from: "Kashif",
        to: "Atif",
        message: "Hi, how are you",
        created_at: new Date(),
    },
    {
        from: "Ajay",
        to: "Sanjay",
        message: "Hi, Whatsapp is running",
        created_at: new Date(),
    },
    {
        from: "Sohail",
        to: "Shashi",
        message: "Hi, Appointment kab hai",
        created_at: new Date(),
    },
    
]


Chat.insertMany(allChats);