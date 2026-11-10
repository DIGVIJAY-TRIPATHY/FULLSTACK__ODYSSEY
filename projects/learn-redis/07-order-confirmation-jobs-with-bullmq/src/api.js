import express from "express";
import Redis from "ioredis";
import { emailQueue } from "./queue.js";

const app = express();
app.use(express.json());

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");


app.post('/welcome-email', async(req, res) => {
    const job = await emailQueue.add(
        "send-welcome-email",
        {
            to: req.body.to,
            name: req.body.name || "learner"
        },
        {
            attempts: 3,
            backoff: {
                type: "exponential",
                delay: 2000
            }
        }
    )
    res.json({message: "Welcome email job added to queue", jobId: job.id})
})


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
