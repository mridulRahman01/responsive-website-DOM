document.getElementById("");

document
  .getElementById("donation-button")
  .addEventListener("click", function () {
    const addMoney = document.getElementById("donation-money").value;
    const addMoneyNumber = parseFloat(addMoney);

    if (!isNaN(addMoneyNumber) && addMoneyNumber > 0) {
      const mainBalance = document.getElementById("main-money").innerText;
      const mainBalanceNumber = parseFloat(mainBalance);

      if (addMoneyNumber <= mainBalanceNumber) {
        const donationBalance = document.getElementById("balance").innerText;
        const donationBalanceNumber = parseFloat(donationBalance);

        const newDonationBalance = donationBalanceNumber + addMoneyNumber;
        const newMainBalance = mainBalanceNumber - addMoneyNumber;

        document.getElementById("balance").innerText =
          newDonationBalance.toFixed(2) + " BDT";
        document.getElementById("main-money").innerText =
          newMainBalance.toFixed(2) + " BDT";

        document.getElementById("donation-money").value = "";
      } else {
        alert("Donation amount exceeds available balance.");
      }
    } else {
      alert("Please enter a valid donation amount.");
    }
  });

document
  .getElementById("donation-button1")
  .addEventListener("click", function () {
    const addMoney = document.getElementById("donation-money1").value;
    const addMoneyNumber = parseFloat(addMoney);

    if (!isNaN(addMoneyNumber) && addMoneyNumber > 0) {
      const mainBalance = document.getElementById("main-money").innerText;
      const mainBalanceNumber = parseFloat(mainBalance);

      if (addMoneyNumber <= mainBalanceNumber) {
        const donationBalance = document.getElementById("balance-1").innerText;
        const donationBalanceNumber = parseFloat(donationBalance);

        const newDonationBalance = donationBalanceNumber + addMoneyNumber;
        const newMainBalance = mainBalanceNumber - addMoneyNumber;

        document.getElementById("balance-1").innerText =
          newDonationBalance.toFixed(2) + " BDT";
        document.getElementById("main-money").innerText =
          newMainBalance.toFixed(2) + " BDT";

        document.getElementById("donation-money1").value = "";
      } else {
        alert("Donation amount exceeds available balance.");
      }
    } else {
      alert("Please enter a valid donation amount.");
    }
  });

// document
//   .getElementById("donation-button2")
//   .addEventListener("click", function () {
//     const addMoney = document.getElementById("donation-money2").value;
//     const addMoneyNumber = parseFloat(addMoney);
//     if (!isNaN(addMoneyNumber) && addMoneyNumber > 0) {
//       const balance = document.getElementById("balance-2").innerText;
//       const balanceNumber = parseFloat(balance);
//       const newBalance = balanceNumber + addMoneyNumber;
//       document.getElementById("balance-2").innerText = newBalance;
//       document.getElementById("balance-2").innerText =
//         newBalance.toFixed(2) + " BDT";
//         if (addMoneyNumber <= mainBalanceNumber) {
//       const mainBalance = document.getElementById("main-money").innerText;
//       const mainBalanceNumber = parseFloat(mainBalance);
//       const newMainBalance = mainBalanceNumber - newBalance;
//       document.getElementById("main-money").innerText = newMainBalance;
//       document.getElementById("main-money").innerText =
//         newMainBalance.toFixed(2) + " BDT";
//         document.getElementById("donation-money2").value = "";
//     } else  {
//       alert("Donation amount exceeds available balance.");
//     }
//    else {
//     alert("Please enter a valid donation amount.");
//   }
// }
//     // } else {
//     //   alert("Opps.Failed to add money.");
//     // }
//   });

document
  .getElementById("donation-button2")
  .addEventListener("click", function () {
    const addMoney = document.getElementById("donation-money2").value;
    const addMoneyNumber = parseFloat(addMoney);

    if (!isNaN(addMoneyNumber) && addMoneyNumber > 0) {
      const mainBalance = document.getElementById("main-money").innerText;
      const mainBalanceNumber = parseFloat(mainBalance);

      if (addMoneyNumber <= mainBalanceNumber) {
        const donationBalance = document.getElementById("balance-2").innerText;
        const donationBalanceNumber = parseFloat(donationBalance);

        const newDonationBalance = donationBalanceNumber + addMoneyNumber;
        const newMainBalance = mainBalanceNumber - addMoneyNumber;

        document.getElementById("balance-2").innerText =
          newDonationBalance.toFixed(2) + " BDT";
        document.getElementById("main-money").innerText =
          newMainBalance.toFixed(2) + " BDT";

        document.getElementById("donation-money2").value = "";
      } else {
        alert("Donation amount exceeds available balance.");
      }
    } else {
      alert("Please enter a valid donation amount.");
    }
  });

// document
//   .getElementById("donation-button")
//   .addEventListener("click", function () {
//     const addMoney = document.getElementById("donation-money").value;
//     const addMoneyNumber = parseFloat(addMoney);

//     if (!isNaN(addMoneyNumber) && addMoneyNumber > 0) {
//       const balanceElement = document.getElementById("balance");
//       const balanceNumber = parseFloat(balanceElement.innerText);
//       const donationElement = document.getElementById("donation-amount");
//       const donationTotal = parseFloat(donationElement.innerText);
//       const newBalance = balanceNumber - addMoneyNumber;
//       const newDonationTotal = donationTotal + addMoneyNumber;
//       //   balanceElement.innerText = newBalance.toFixed(2) + " BDT";
//       //   donationElement.innerText = newDonationTotal.toFixed(2) + " BDT";
//       document.getElementById("donation-money").value = "";
//     } else {
//       alert("Please enter a valid donation amount.");
//     }
//   });
