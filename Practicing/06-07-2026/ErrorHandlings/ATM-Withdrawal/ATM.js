function withdraw(balance, amount) {
    try {
        if (typeof amount !== "number" || isNaN(amount)) {
            throw new Error("Amount must be a valid number.");
        }

        if (amount <= 0) {
            throw new Error("Amount must be greater than 0.");
        }

        if (amount % 100 !== 0) {
            throw new Error("Amount must be divisible by 100.");
        }

        if (amount > balance) {
            throw new Error("Insufficient balance.");
        }

        balance -= amount;

        console.log("Withdrawal Successful");
        console.log("Withdrawn Amount:", amount);
        console.log("Remaining Balance:", balance);

    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Transaction Finished");
    }
}

withdraw(10000, 2000);
withdraw(10000, "2000");