const redis = require("redis");
const { promisify } = require("util");

class Database{
    constructor(){
        this.client = redis.createClient(6379, "redis");
        this.client.on("error", this.onerror);
        this.client.get = promisify(this.client.get).bind(this.client);
    }
    set = (key, value) => {
        this.client.set(key, value);
    }
    get = (key, callback) => {
        return this.client.get(key)
    }
    onerror = (error) => {
        console.error(error)
    }
}

module.exports = Database;