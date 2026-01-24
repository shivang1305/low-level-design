class Logger {
  private static instance: Logger;

  private constructor() {
    console.log("Logger instance created...");
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  public log(message: string): void {
    console.log(message);
  }
}

const logger1 = Logger.getInstance();
logger1.log("Payment done...");

const logger2 = Logger.getInstance();
logger2.log("User logged out...");

console.log(logger1 === logger2); // true
// only a single instance of logger is created to avoid data inconsitency
// both logger1 & logger2 points to same instance of the logger class
