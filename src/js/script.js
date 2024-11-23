
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

class TaskQueue {
     queue=1000;
     number= 0;
    task=[];
    constructor(queue,number,task) {
        this.queue = queue;
        this.number = number;
        this.task=task;
    }



    addTask(task: () => Promise<string>){

 this.task.push(task);
    }



    async run(): Promise<string> {
        if(!this.isRunning){
        for (const task of this.tasks) {
            const result = await task();
            console.log(result);
            await delay(this.queueDelay);
        }
        console.log("Усі завдання завершено");
    }else console.log('операція виконується');

    }
}

const queue = new TaskQueue(1000); // затримка між завданнями — 1 секунда

queue.addTask(() => Promise.resolve("Task 1 виконано"));
queue.addTask(() => Promise.resolve("Task 2 виконано"));
queue.addTask(() => Promise.resolve("Task 3 виконано"));

queue.run().then((message) => {
    console.log(message); // Усі завдання завершено
});

