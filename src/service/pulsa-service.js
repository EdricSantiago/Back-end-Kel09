const accountRepository = require('../repository/account-repository');
const transactionRepository = require('../repository/transaction-repository');

const buyPulsa = async (user, data) => {
  const { phone, amount } = data;

  if (!phone || !amount) {
    throw new Error("Data tidak lengkap");
  }

  const account = await accountRepository.getByUserId(user.id);

  if (!account) {
    throw new Error("Akun tidak ditemukan");
  }

  if (account.balance < amount) {
    throw new Error("Saldo tidak cukup");
  }

  account.balance -= amount;
  await account.save();

  await transactionRepository.saveTransaction({
    userId: user.id,
    type: "pulsa",
    amount: amount,
    description: `Beli pulsa ke ${phone}`
  });

  return {
    phone,
    amount,
    sisaSaldo: account.balance
  };
};

module.exports = { buyPulsa };