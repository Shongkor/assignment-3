https: //github.com/Shongkor/assignment-3






    // kilometerToMeter start
    function kilometerToMeter(addKilometer) {
        if (typeof addKilometer != 'number') {
            return "Plz give me a num";
        } else if (0 <= addKilometer) {
            return addKilometer * 1000; //1km=1000m;
        } else {
            return "plz give me valid number"
        }
    }

// kilometerToMeter end

// budgetCalculator start
function budgetCalculator(noOfWatch, noOfPhone, noOfLaptop) {
    if (typeof noOfWatch != 'number' || typeof noOfPhone != 'number' || typeof noOfLaptop != 'number') {
        return "wrong input";
    } else if (0 <= noOfWatch && 0 <= noOfPhone && 0 <= noOfLaptop) {
        return (noOfWatch * 50) + (noOfPhone * 100) + (noOfLaptop * 500);
        //given that every watch price=50$,phone price=100$,laptop price=500$
    } else {
        return "Your input is incorrect"
    }
}
//budgetCalculator end

//hotelCost start
function hotelCost(noOfDay) {
    if (typeof noOfDay != 'number' || noOfDay % 1 != 0) {
        return "plz input a whole number"
    }
    if (noOfDay <= 10) {
        return noOfDay * 100; //first 10 day perday cost 100.
    } else if (noOfDay <= 20) {
        return (10 * 100) + (noOfDay - 10) * 80;
        //first 10 day perday cost 100.next 10 day perday 80 tk
    } else if (20 < noOfDay) {
        return (10 * 100) + (10 * 80) + (noOfDay - 20) * 50;
        //first 10 day perday cost 100.next 10 day 80 tk.after 20 day perday 50tk
    } else {
        return "Your input is incorrect";
    }
}
//hotelCost end

//megaFriend start
function megaFriend(arr) {
    if (arr.length != 0) {
        var largest = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length > largest.length) {
                largest = arr[i];
            }
        }
        var name = largest;
        if (typeof largest != 'string') {
            return "Array elements are must be string";
        } else {
            return largest;
        }

    } else {
        return "Sorry! You have no friend."
    }
}
//megaFriend end