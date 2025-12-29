import IPayment from "./IPayment";

export default class CardPayment implements IPayment {
  pay(amount: number) {
    console.log(`${amount} paid through Card`);
  }
}
