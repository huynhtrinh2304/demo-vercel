const mongo = require("mongodb");
const url = "mongodb://localhost:27017/test";

export default connectMGDB = () => {
    console.log("trinhuynh");
    mongo.connect(url, { useNewUrlParser: true }, (err, db) => {
        if (err) {
            console.log(err);
            process.exit(0);
        }
        console.log("database connected!");
        db.close();
    });
}



