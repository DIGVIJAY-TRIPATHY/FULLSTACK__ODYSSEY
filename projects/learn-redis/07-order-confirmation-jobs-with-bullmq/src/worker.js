import { Job, Worker } from "bullmq";
import { connection } from "./queue.js";

const worker = new Worker(
    'emails', 
    async (Job) => {
        console.log("processing emial job ....", Job.fromId, Job.name, Job.data)
        await new Promise((resolve)=> setTimeout(resolve, 1500))
        console.log("email job completed!", Job.id, Job.name, Job.date);
        
    },
    {connection}
)

worker.on("completed",(job)=>{
    console.log("job completed", job.id, job.name, job.date);
})

worker.on("failed", (job, error)=> {
    console.log("job failed", job.id,job.name,job.date, error);
})
