document.querySelector('form').addEventListener('submit', function(e) {
	  e.preventDefault();

	  let height = parseFloat(document.querySelector('#height').value);
	  const weight = parseFloat(document.querySelector('#weight').value);
	  let results = document.querySelector('#results'); 

	  if (height === "" || height <= 0 || isNaN(height) || weight === "" || weight <= 0 || isNaN(weight)) {
		      results.innerHTML = `Please enter valid height and weight`;
		    } else {
			        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

			        if (bmi < 18.6) {
					      results.innerHTML = `<span>${bmi}</span> underweight`;
					    } else if (bmi >= 18.6 && bmi < 24.9) {
						          results.innerHTML = `<span>${bmi}</span> normal`;
						        } else {
								      results.innerHTML = `<span>${bmi}</span> overweight`;
								    }
			      }
});

