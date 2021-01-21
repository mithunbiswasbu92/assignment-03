//assignment first problem solved. 
//we know 1 kilometer = 1000 meter. 
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(3);
console.log(result);

//assignment second problem solved.
function budgetCalculator(watch, phone, laptop){

    var watchPrice = 50;
    var totalWatchPrice = watchPrice * watch;

    var phonePrice = 100;
    var totalPhonePrice = phonePrice * phone;

    var laptopPrice = 500;
    var totalLaptopPrice = laptopPrice * laptop;

    var totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
    return totalPrice;
}

var totalCost = budgetCalculator(5, 3, 2);
console.log(totalCost);

//tird problem solved!
function hotelCost(days){
    if(10 >= days){
        var shortDays = days * 100; 
        return shortDays;
    }
    else if(20 >= days){
        var midDays = days - 10;
        midDays = midDays * 80 + 1000;
        return midDays;
    }
    else{
        var longDays = days - 20;
        longDays = longDays * 50 + 1800;
        return longDays;
    };
}

 var cost = hotelCost(150);
 console.log(cost);

 //Forth problem solved!

function megaFriend(name){
    var big = 0;
    var bigest;
    for(var i = 0; i < name.length; i++){
        if(name[i].length > big){
            var big = name[i].length;
            bigest = name[i];
        }
    }
    return bigest;
}  
var frdName = ['Rakib', 'Antu', 'Sumon', 'Jui', 'Monirul', 'Shakib'];
var bigName = megaFriend(frdName);
console.log(bigName);