function toggle(btn) {
    let ans = btn.nextElementSibling;

    if (ans.style.display === "none" || ans.style.display === "") {
        ans.style.display = "block";
        btn.innerText = "Hide Answer";
    } else {
        ans.style.display = "none";
        btn.innerText = "Show Answer";
    }
}