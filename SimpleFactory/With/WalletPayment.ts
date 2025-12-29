class WalletPayment implements IPayment {
  pay(amount: number) {
    console.log(`${amount} paid through Wallet`);
  }
}
