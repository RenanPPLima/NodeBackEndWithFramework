const mongoose = require("mongoose")

async function main() {
    
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            // INSERT "CONNECTION STRING" HERE TO MONGO
        );
        
        console.log("Connected to DB");
        
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = main;