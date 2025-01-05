import AlertLogger from "./alert-logger.js";
import ConsoleLogger from "./console.logger.js";
function getLogger(name) {
    switch (name) {
        case 'console':
            return new ConsoleLogger();
        case 'alert':
            return new AlertLogger;
    }
}
const logger = getLogger('console');
logger.log('hello polymorphism');
