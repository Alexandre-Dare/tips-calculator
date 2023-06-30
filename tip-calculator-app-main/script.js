let bill = '';
let people = 0;
let tipPercentage = 0;
let tipAmountPerPerson = 0;
let totalPerPerson =0;
let elements = document.getElementsByClassName('percent-selector');
let billIsFull = false;
let peopleIsFull = false;
let tipIsSelected = false;

//function for tip calculation per person
function tipCalculator (bill, people, tipPercentage) {
    tipAmountPerPerson = (bill*tipPercentage)/people;
    
    return tipAmountPerPerson;
}

//total calculation per person
function totalCalculator (bill, people, tipPercentage) {
    totalPerPerson = (((bill*tipPercentage)/people) +(bill/people));
    
    return totalPerPerson;
}

//get bill input value
document
    .getElementById('bill-input')
    .addEventListener('input', function(e){
        bill = parseFloat(e.target.value);
        billIsFull = true;
        document.getElementById('reset').style.opacity = '1';
        let fullValueTotal = totalCalculator(bill, people, tipPercentage);
        let totalRes = fullValueTotal.toFixed(2);
        let fullValueTip = tipCalculator(bill, people, tipPercentage);
        let res = fullValueTip.toFixed(2);
        console.log(res);
        //condition to update result at every changes
        if(billIsFull === true && peopleIsFull === true && tipIsSelected === true) {
            if(res > 0){ 
                document
                    .getElementById('amount-per-person')
                    .innerHTML = `\$${res}`;
                document
                    .getElementById('Total-per-person')
                    .innerHTML = `\$${totalRes}`;
            } else {
                document.getElementById('amount-per-person').innerHTML = '$0.00';
                document.getElementById('Total-per-person').innerHTML = '$0.00';
            };
        };
    });

//get selected tip percentage
for (const element of elements) {
    element.addEventListener('click', function(e) {
        for(ele of elements) {
            ele.style.backgroundColor = 'hsl(183, 100%, 15%)';
        }
        document.getElementById('custom').value = ''; //reset custom tip input
        tipPercentage = parseFloat(`0.${e.target.value}`);
        e.target.style.backgroundColor = 'hsl(172, 67%, 45%)';
        tipIsSelected = true
        document.getElementById('reset').style.opacity = '1';
        let fullValueTotal = totalCalculator(bill, people, tipPercentage);
        let totalRes = fullValueTotal.toFixed(2);
        let fullValueTip = tipCalculator(bill, people, tipPercentage);
        let res = fullValueTip.toFixed(2);
        //condition to update result at every changes
        if(billIsFull === true && peopleIsFull === true && tipIsSelected === true) {
            if(res > 0){ 
                document
                    .getElementById('amount-per-person')
                    .innerHTML = `\$${res}`;
                document
                    .getElementById('Total-per-person')
                    .innerHTML = `\$${totalRes}`;
            } else {
                document.getElementById('amount-per-person').innerHTML = '$0.00';
                document.getElementById('Total-per-person').innerHTML = '$0.00';
            };
        };
    });
};

//look if custom percentage is used or not
document
    .getElementById('custom')
    .addEventListener('input', function(e) {
        tipPercentage = parseFloat(`0.${e.target.value}`);
        tipIsSelected = true;
        document.getElementById('reset').style.opacity = '1';
        for(const element of elements) {
            element.style.backgroundColor = 'hsl(183, 100%, 15%)';
        }
        let fullValueTotal = totalCalculator(bill, people, tipPercentage);
        let totalRes = fullValueTotal.toFixed(2);
        let fullValueTip = tipCalculator(bill, people, tipPercentage);
        let res = fullValueTip.toFixed(2);
        //condition to update result at every changes
        if(billIsFull === true && peopleIsFull === true && tipIsSelected === true) {
            if(res > 0){ 
                document
                    .getElementById('amount-per-person')
                    .innerHTML = `\$${res}`;
                document
                    .getElementById('Total-per-person')
                    .innerHTML = `\$${totalRes}`;
            } else {
                document.getElementById('amount-per-person').innerHTML = '$0.00';
                document.getElementById('Total-per-person').innerHTML = '$0.00';
            };
        };
    });

//get number of people and put it to html
document
    .getElementById('people-counter')
    .addEventListener('input', function(e){
        people = parseFloat(e.target.value);
        peopleIsFull = true
        document.getElementById('reset').style.opacity = '1';
        let fullValueTotal = totalCalculator(bill, people, tipPercentage);
        let totalRes = fullValueTotal.toFixed(2);
        let fullValueTip = tipCalculator(bill, people, tipPercentage);
        let res = fullValueTip.toFixed(2);
        //condition to update result at every changes
        if(billIsFull === true && peopleIsFull === true && tipIsSelected === true) {
            if(res > 0){ 
                document
                    .getElementById('amount-per-person')
                    .innerHTML = `\$${res}`;
                document
                    .getElementById('Total-per-person')
                    .innerHTML = `\$${totalRes}`;
            } else {
                document.getElementById('amount-per-person').innerHTML = '$0.00';
                document.getElementById('Total-per-person').innerHTML = '$0.00';
            };
        };
    });
//reset part..
document
    .getElementById('reset')
    .addEventListener('click', function(e) {
        location.reload();
    });


