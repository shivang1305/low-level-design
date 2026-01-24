class Logger {
  log(message: string) {
    console.log(message);
  }
}

const logger1 = new Logger();
logger1.log("Payment done...");

const logger2 = new Logger();
logger2.log("User logged out");

console.log(logger1 === logger2); // false
// two seperate instances of logger are created
// this can create data inconsistency as both the loggers will write in the same logger file at some point
