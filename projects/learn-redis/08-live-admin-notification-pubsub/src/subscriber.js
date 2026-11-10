import redis from "ioredis";

const subscriber = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

subscriber.subscribe('notifications', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("Subscribed to channel: notifications");
})

subscriber.on('message', (channel, message) => {
    console.log("received on " + channel + " : " + JSON.parse(message));
})

export default subscriber;