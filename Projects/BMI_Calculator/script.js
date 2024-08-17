const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height < 0 || isNaN(height))
    {
        results.innerHTML = `Please Enter a Valid Height: ${height}`;
    }
    else if (weight < 0 || isNaN(weight)) 
    {
        results.innerHTML = `Please Enter a Valid Weight: ${weight}`;
    } 
    else
    {
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        
        let category;
        
        if (bmi < 18.6) 
        {
            category = "Underweight";
        } 

        else if (bmi >= 18.6 && bmi <= 24.9) 
        {
            category = "Normal Weight";
        } 
        
        else 
        {
            category = "Overweight";
        }

        results.innerHTML = `<span>Your BMI is: ${bmi} (${category})</span>`;
    }
});
