function turista() {
  window.location.href = "cooee://EnterScene(3210097)";
}
function turista2() {
  window.location.href = "cooee://EnterScene(3203420)";
}
function turista3() {
  window.location.href = "cooee://EnterScene(5949603)";
}

var n = 1;
function ativar() {
  setInterval(() => {
    document.getElementById(`turista${n}`).click();
    console.log(n);
    n++;
    if (n == 4) {
      n = 1;
    }
  }, 6000);
}
