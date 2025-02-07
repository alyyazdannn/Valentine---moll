document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("gifContainer").classList.add("hidden");
});
let noCount = 0;
document.getElementById("noBtn").addEventListener("click", function() {
    noCount++;
    if (noCount < 3) {
        alert("Are you sure? 🥺");
    } else {
        document.getElementById("gifContainer").classList.remove("hidden");
    }
});
