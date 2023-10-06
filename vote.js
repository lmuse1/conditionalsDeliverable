function checkVotingEligibility() {
    let age = document.getElementById("inputAge").value;
    let showResult = document.getElementById("results");
   
    if (age >= 18) {
        showResult.textContent = "You are eligible to vote!";
    } else {
        showResult.textContent = "Sorry, you are not eligible to vote yet.";
    }
}