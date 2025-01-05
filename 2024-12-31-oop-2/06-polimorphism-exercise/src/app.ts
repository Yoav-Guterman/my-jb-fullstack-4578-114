import AlertLogger from "./alertLogger.js";
import ConsoleLogger from "./console.logger.js";
import Logger from "./logger.js";

function getLogger(name: string): Logger {
    switch (name) {
        case 'console':
            return new ConsoleLogger()
            break;
        case 'alert':
            return new AlertLogger()
            break;
    }
}

const logger = getLogger('alert')
logger.log('hello polymorphism')