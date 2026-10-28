// II ეტაპის გამართული JavaScript კოდი
document.getElementById("calcButton").addEventListener("click", function () {
  const priceVal = document.getElementById("priceInput").value;
  const discountVal = document.getElementById("discountInput").value;
  const outputElement = document.getElementById("resultOutput");

  // ლოგიკური და ტიპების შემოწმება (Debugging fix)
  const parsedPrice = parseFloat(priceVal);
  const parsedDiscount = parseFloat(discountVal) || 0;

  if (isNaN(parsedPrice) || parsedPrice < 0) {
    outputElement.style.color = "var(--danger)";
    outputElement.innerText = "შეცდომა: გთხოვთ შეიყვანოთ ვალიდური ფასი!";
    return;
  }

  // სწორი გამოთვლის ლოგიკა
  const finalPrice = calculateFinalPrice(parsedPrice, parsedDiscount);

  outputElement.style.color = "var(--success)";
  outputElement.innerText = `საბოლოო ფასი: $${finalPrice.toFixed(2)}`;
});

function calculateFinalPrice(price, discount) {
  // გამართული ფუნქცია: აღარ იყენებს განუსაზღვრელ (undefined) ცვლადებს
  const discountAmount = (price * discount) / 100;
  return price - discountAmount;
}
