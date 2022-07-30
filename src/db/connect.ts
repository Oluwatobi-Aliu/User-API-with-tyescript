import mongoose from "mongoose";
import config from "config";
import log from "../logger";


export default async function connect() {
    const dbUrl = config.get("dbUrl") as string;

    return mongoose.connect(
        dbUrl
    ).then(() => {
        log.info("Database connect")
    }).catch(error => {
        log.error("db.error", error)
        process.exit(1);
    });

}