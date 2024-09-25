document.getElementById("history-btn").addEventListener("click", function () {
  showSectionById("history-container");
});

document.getElementById("donation-btn").addEventListener("click", function () {
  showSectionById("donation-form");
});

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
        const historyItem = document.createElement("div");
        historyItem.className =
          "border-2 p-3 rounded-lg mt-[20px] mb-[20px] lg:w-[1000px] lg:ml-[350px]";

        historyItem.innerHTML = `
<p> ${newDonationBalance} Taka is donated for Flood Relief in Feni,Bangladesh </p>
<p>Date:- ${new Date().toString()}</p>
`;
        const historyContainer = document.getElementById("history-container");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
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
        const historyItem = document.createElement("div");
        historyItem.className =
          " p-3 rounded-lg border-2 mb-[20px] mt-[20px] lg:w-[1000px] lg:ml-[350px]";

        historyItem.innerHTML = `
<p> ${newDonationBalance} Taka is donated for Flood Relief in Feni,Bangladesh </p>
<p>Date:- ${new Date().toString()}</p>
`;
        const historyContainer = document.getElementById("history-container");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
      } else {
        alert("Donation amount exceeds available balance.");
      }
    } else {
      alert("Please enter a valid donation amount.");
    }
  });
let newDonationBalance;
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

        newDonationBalance = donationBalanceNumber + addMoneyNumber;
        const newMainBalance = mainBalanceNumber - addMoneyNumber;

        document.getElementById("balance-2").innerText =
          newDonationBalance.toFixed(2) + " BDT";
        document.getElementById("main-money").innerText =
          newMainBalance.toFixed(2) + " BDT";

        document.getElementById("donation-money2").value = "";
        const historyItem = document.createElement("div");
        historyItem.className =
          " p-3 rounded-lg border-2 mb-[20px] mt-[20px] lg:w-[1000px] lg:ml-[350px] items-center ";

        historyItem.innerHTML = `
<p> ${newDonationBalance} Taka is donated for Aid for Injured in the Quota Movement,Bangladesh </p>
<p>Date:- ${new Date().toString()}</p>
`;
        const historyContainer = document.getElementById("history-container");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
      } else {
        alert("Donation amount exceeds available balance.");
      }
    } else {
      alert("Please enter a valid donation amount.");
    }
  });

const historyButton = document.getElementById("history-btn");
const donationButton = document.getElementById("donation-btn");
historyButton.addEventListener("click", function () {
  historyButton.classList.add("bg-lime-400");

  donationButton.classList.remove("bg-lime-400");
  donationButton.addEventListener("click", function () {
    donationButton.classList.add("bg-lime-400");
    historyButton.classList.remove("bg-lime-400");
  });
});
