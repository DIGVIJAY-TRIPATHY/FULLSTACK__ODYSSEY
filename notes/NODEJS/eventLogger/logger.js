const fs = require('fs')
const os = require('os')

const EventEmitter = require('events')

const Logger extends EventEmitter {
    log(message) {
        this.emit('message', {message})
    }
}

const logger = new Logger()
const logFile = './eventlog.txt'

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message} \n`

    fs.appendFileSync(logFile, logMessage)
}

logger.on('message', logToFile)

setInterval(() => {
    const memoryUsage = os.freemem() / os.totalmem() * 100
    logger.log(`Memory usage: ${memoryUsage.toFixed(2)}%`)
}, 3000)

logger.log('application started')
logger.log('application event occured')

