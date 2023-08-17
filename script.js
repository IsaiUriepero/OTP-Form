document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input");
    const button = document.querySelector("button");
  
    inputs.forEach((input, index) => {
      input.addEventListener("keyup", (e) => {
        const currentInput = input;
        const nextInput = input.nextElementSibling;
        const prevInput = input.previousElementSibling;
  
        if (currentInput.value.length > 1) {
          currentInput.value = "";
          return;
        }
  
        if (e.key === "Backspace") {
          inputs.forEach((input, index2) => {
            if (index <= index2 && prevInput) {
              input.disabled = true;
              input.value = "";
              prevInput.focus();
            }
          });
        }
  
        if (nextInput && nextInput.disabled && currentInput.value !== "") {
          nextInput.disabled = false;
          nextInput.focus();
        }
  
        const fourthInput = inputs[3];
        if (!fourthInput.disabled && fourthInput.value !== "") {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    });
  
    inputs[0].focus();
  });
  