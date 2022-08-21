const btn1 = document.querySelector("#track");
const listFood = document.querySelector("#list");



btn1.addEventListener('click', async function(e){
    e.preventDefault();
    const inputVal = document.querySelector('#enter');
    const inputFat = document.querySelector('#mFat');

    console.log(inputVal.value);
    console.log(inputFat.value);
    const headerConfig = { headers: { Accept: "application/json" ,},}
    if(inputFat.value == ""){
        inputFat.value = 100;
    }
    const config = {
        params: {

            query: inputVal.value,
            maxFat: inputFat.value
        }


    };
    const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${config.params.query}&minProtien${config.params.query}&number=1&apiKey=e1e9e17338544f5983922872c0475bd2`, headerConfig);
    console.log(res.data);
    console.log(inputFat.value);

    const newFood = document.createElement("li");
    newFood.innerText = res.data.results[0].title
    list.appendChild(newFood);


});


//`