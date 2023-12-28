const form = window.document.querySelector(".form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("predicted event");
    inputValues_Bmi_result();
    hidden();
});


function inputValues_Bmi_result () {
    const weightInput = window.document.querySelector(".input-number-peso");
    const heightImput = window.document.querySelector(".input-number-altura");

    const weight = Number(weightInput.value);
    const height = Number(heightImput.value);
    console.log(weight, height);  

    const bmi = (weight / (height * height)).toFixed(2);
    console.log(bmi);


    const value = window.document.querySelector("#value");
    value.classList.add("attention");
    value.textContent = bmi.replace(".", ",");
    
    let description = " ";
//--------------------------------------------------------------------------
    if (bmi < 18.5) {
        description = "Cuidado voce esta abaixo do Peso!";
    }

    else if (bmi >= 18.5 && bmi <= 25) {
        description = "Voce esta no peso ideal";
        value.classList.remove("attention");
        value.classList.add("normal");
    }

    else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Voce esta com sobrepeso";
    }

    else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Voce esta com obesidade moderada";
    }

    else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Voce esta com obesidade severa";
    }

    else {
        description = "Obesidade Morbida!"
    }
//--------------------------------------------------------------------------
    document.querySelector(".description").textContent = description;
    
};



function hidden () {
    const resultado = window.document.querySelector(".resultado");
    resultado.classList.remove("hidden");
};
