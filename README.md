# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![image](https://user-images.githubusercontent.com/69098117/131033008-edab5c9b-d141-4f65-915f-bdcc51e79446.png)




### Links

- Solution URL: https://calculator-app-gus.herokuapp.com/index.html

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap CSS framework



### What I learned

I had two great difficulties to carry out this project. 

* The first was the positioning with Bootstrap since I had problems in positioning the two columns. 

* The second and unexpected difficulty was entering the point in the mobile device. The solution that I implemented was to set as a point any value that is different from a number.

function onlyNumberKeyDot(evt) {
  if (evt >= 0 && evt <= 9) {
    let inputBillPut = document.querySelector("#inputBillText").value;
    console.log(inputBillPut);
    let keyPush = evt;
    console.log(evt);
    bill = bill + keyPush;
    document.querySelector("#inputBillText").value = inputBillPut;    
    return false;
  } else
    if (evt == "Unidentified" || evt == ".") {
      bill = bill + ".";
      return false;
    } else return false;
}

This function runs when a value is entered. If it is a "." or "Identified", a "." to the final value is added.





## Author

- Website - https://github.com/Gusjafo
- Frontend Mentor - https://www.frontendmentor.io/profile/Gusjafo


**Have fun building!** 🚀
