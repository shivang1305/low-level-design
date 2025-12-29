import IPayment from "./IPayment";

export default class UpiPayment implements IPayment {
  pay(amount: number) {
    console.log(`${amount} paid through UPI`);
  }
}
