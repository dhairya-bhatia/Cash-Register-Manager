const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector(".check-btn");
const billErrorMsg = document.querySelector("#bill-error-msg");
const cashErrorMsg = document.querySelector("#cash-error-msg");
const numOfNotes = document.querySelectorAll(".num-of-notes");
const changeTable = document.querySelector(".change-return-wrapper");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

checkBtn.addEventListener("click", () => {
  hideErrorMsg();
  hideChangeTable();
  clearNoOfNotes();
  if (billAmount.value > 0) {
    if (cashGiven.value > billAmount.value) {
      const returnAmount = cashGiven.value - billAmount.value;
      calculateChange(returnAmount);
    } else if (cashGiven.value == billAmount.value) {
      showErrorMsg("No amount should be returned.");
    } else {
      showErrorMsg(
        "The cash given is less than the bill amount. Please provide more cash."
      );
    }
  } else {
    showErrorMsg("The Bill amount should be greater than 0", true);
  }
});

const showErrorMsg = (msg, isBillAmountError) => {
  if (isBillAmountError) {
    billErrorMsg.style.display = "block";
    billErrorMsg.innerText = msg;
  } else {
    cashErrorMsg.style.display = "block";
    cashErrorMsg.innerText = msg;
  }
};

const hideErrorMsg = () => {
  billErrorMsg.style.display = "none";
  cashErrorMsg.style.display = "none";
};
const hideChangeTable = () => (changeTable.style.display = "none");

const clearNoOfNotes = () => {
  for (let notes of numOfNotes) {
    notes.innerText = "";
  }
};

const calculateChange = (amountToBeReturned) => {
  changeTable.style.display = "block";
  availableNotes.forEach((amount, index) => {
    let dividend = Math.trunc(amountToBeReturned / amount);
    if (dividend > 0) {
      amountToBeReturned %= amount;
      numOfNotes[index].innerText = dividend;
    }
  });
};
