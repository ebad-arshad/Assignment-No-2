// Chapter 3

// Q1

// var age = 18;
// alert(age);

// Q2

// var visitedNumber = 20;
// alert("You have visited this site " + visitedNumber + " times");

// Q3

// var birthYear = 2003;
// var message = "My birth year is " + birthYear + "<br/>" + "Data type of my declared variable is " + typeof (birthYear);
// document.write("<h1>" + message + "</h1>");

// Q4

// var visName ="<b>" + "Ebad " + "</b>";
// var product ="<b>" + " Iphone " + "</b>";
// var quantity ="<b>" + 2 + "</b>";
// document.write("<p>" + visName + "ordered " + quantity + product + "XYZ Clothing store" + "</p>");





// Chapter 4

// Q1 

// var var1;
// var var2;
// var var3;

// Q2 

// Legal

// var itIsLegal;
// var it_is_also_legal;
// var legal;
// var legal222;
// var number;

// Illegal

// var 1illegal;
// var !calc;
// var -wrong;
// var @wrong;

// Q3

// var heading = "<h1>" + "Rules for naming JS variables" + "</h1>";
// var message1 = "Variable names can only contain numbers , $ and _ . For example : $my_1stVariable";
// var message2 = "Variables must begin with a letter, $ or _ . For example : $name, _name or name";
// var message3 = "Variable names are case";
// var message4 = "Variable names should not be JS keywords";
// var message = heading + "<br />" + message1 + "<br />" + message2 + "<br />" + message3 + "<br />" + message4;
// document.write(message);





// Chapter 5

// Q1 

// var num1 = +prompt("Enter first Number");
// var num2 = +prompt("Enter second Number");
// var totalNum = num1 + num2;
// var result = "Sum of " + num1 + " and " + num2 + " is " + totalNum;
// document.write(result);

// Q2

// var num1 = +prompt("Enter first Number");
// var num2 = +prompt("Enter second Number");

// var totalNum = num1 + num2;
// var result = "Sum of " + num1 + " and " + num2 + " is " + totalNum;
// document.write(result + "<br />");

// var totalNum = num1 - num2;
// var result = "Substraction of " + num1 + " and " + num2 + " is " + totalNum;
// document.write(result + "<br />");

// var totalNum = num1 * num2;
// var result = "Product of " + num1 + " and " + num2 + " is " + totalNum;
// document.write(result + "<br />");

// var totalNum = num1 / num2;
// var result = "Division of " + num1 + " and " + num2 + " is " + totalNum;
// document.write(result + "<br />");

// var totalNum = num1 % num2;
// var result = "Modulus of " + num1 + " and " + num2 + " is " + totalNum;
// document.write(result + "<br />");

// Q3

// var nullVar;
// var message = "Value after variable decleration is " + typeof (nullVar) + "<br />";
// document.write(message);

// var num = 22;
// document.write("Initialize value is " + num + "<br />");
// num++;
// document.write("Value after Increament is " + num + "<br />");
// num = num + 7;
// document.write("Value after addition is " + num + "<br />");
// num--;
// document.write("Value after decreament is " + num + "<br />");
// num = num / 3;
// document.write("The reminder is " + num) + "<br />";

// Q4

// var heading = "<h1>" + "Ticket price is 600pkr" + "</h1>";
// var price = 600;
// var tickets = +prompt("How many tickets You want");
// document.write(heading + "Total cost to buy " + tickets + " tickets to a movie is " + price * tickets + "PKR");

// Q5

// var num = +prompt("Enter what Number of Table you want");
// var heading = "Table of " + num;

// document.write(num + " x " + 1 + " = " + num*1 + "<br />");
// document.write(num + " x " + 2 + " = " + num*2 + "<br />");
// document.write(num + " x " + 3 + " = " + num*3 + "<br />");
// document.write(num + " x " + 4 + " = " + num*4 + "<br />");
// document.write(num + " x " + 5 + " = " + num*5 + "<br />");
// document.write(num + " x " + 6 + " = " + num*6 + "<br />");
// document.write(num + " x " + 7 + " = " + num*7 + "<br />");
// document.write(num + " x " + 8 + " = " + num*8 + "<br />");
// document.write(num + " x " + 9 + " = " + num*9 + "<br />");
// document.write(num + " x " + 10 + " = " + num*10 + "<br />");

// Q6

// var celsius = 25;
// var fahrenheit = 70;
// var convCtoF = (celsius * 9/5) + 32;
// var convFtoC = (fahrenheit - 32) * 5 / 9;
// document.write(celsius + "C is " + convCtoF + "F" + "<br />");
// document.write(fahrenheit + "F is " + convFtoC + "C" + "<br />");

// Q7

// var item1Price = 650; 
// var item2Price = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var shippingCharges = 100;
// var tCost = (item1Price * quantity1) + (item2Price * quantity2) + shippingCharges;

// document.write("<h1> Shopping Cart </h1>");
// document.write("Price of item 1 is " + item1Price + "<br />" );
// document.write("Quantity of item 1 is " + quantity1 + "<br />" );
// document.write("Price of item 2 is " + item2Price + "<br />" );
// document.write("Quantity of item 2 is " + quantity2 + "<br />" );
// document.write("Shipping Charges " + shippingCharges + "<br />" );
// document.write("Total cost of your order is " + tCost + "<br />" );

// Q8

// var tMarks = 980;
// var marksObtained = 804;
// var per = 100 / tMarks*marksObtained ;
// console.log(per);

// Q9

// var usDollar = 10;
// var usToPak = 104.80;
// var riyal = 25;
// var riyalToPak = 28;
// var totalPKR = (usDollar * usToPak) + (riyal * riyalToPak);

// document.write("<h1> Currency in PKR </h1>");
// document.write("Total Currency in PKR: " + totalPKR);

// Q10

// var num = 205;
// var result = num+5*10/2;
// document.write(result);

// Q11

// var currentYear = 2022;
// var birthYear = 2003;
// var age = currentYear-birthYear;
// document.write("<h1> Age Calculator </h1>");
// document.write("Current Year: " + currentYear + "<br />");
// document.write("Birth Year: " + birthYear + "<br />");
// document.write("Your Age is: " + age + "<br />");

// Q12

// var radius = 20;
// var circumference = 2*3.142*radius;
// var area = 3.142*radius*radius;
// document.write("<h1> The Geometrizer </h1>" + "<br />");
// document.write("Radius of a circle: " + radius + "<br />");
// document.write("The circumference is: " + circumference + "<br />");
// document.write("The area is: " + area + "<br />");

// Q13 

// var favSnack = "Potato Stick";
// var age = 19;
// var maxAge = 25;
// var snackPerDay = 10;
// var result = (maxAge - age) * 10; 
// document.write("<h1> The Lifetime Supply Calculator </h1>");
// document.write("Favourite Snack: " + favSnack + "<br />");
// document.write("Current Age: " + age + "<br />");
// document.write("Estimated Maximum Age: " + maxAge + "<br />");
// document.write("Amount of snacks per day: " + snackPerDay + "<br />");
// document.write("You wull need " + result + " " + favSnack + " to last you until the ripe old age of " + maxAge + "<br />");





// Chapter 6

// Q1 

// var userNum = +prompt("Enter any Number");
// document.write("Result: <br /2>");
// document.write("The value of a is: " + userNum + " <br /> <br /> <hr />");
// document.write("<br />" + "The value of ++a is: " + ++userNum);
// document.write("<br />" + "Now the value of a is: " + userNum + "<br />");
// document.write("<br />" + "The value of a++ is: " + userNum++);
// document.write("<br />" + "Now the value of a is: " + userNum + "<br />");
// document.write("<br />" + "The value of --a is: " + --userNum);
// document.write("<br />" + "Now the value of a is: " + userNum + "<br />");
// document.write("<br />" + "The value of a-- is: " + userNum--);
// document.write("<br />" + "Now the value of a is: " + userNum + "<br />");

// Q2 

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("--a; " + --a + "<br />");
// document.write("--a - --b; " + (--a - --b) + "<br />");
// document.write("--a - --b + ++b; " + (--a - --b + ++b) + "<br />");
// document.write("--a - --b + ++b + b--; " + (--a - --b + ++b + b--) + "<br />");
// document.write("Result");

// Q3 

// var userName = prompt("Enter your Name");
// alert("Hello " + userName + "\nWelcome Back!");

// Q4

// var num = +prompt("Enter Number");
// var i;
// if (num === 0) {
//     for (i = 1; i <= 10; i++) {
//         document.write("5 x " + i + " = " + 5 * i + "<br />")
//     }

// }
// else if (num === num) {
//     for (i = 1; i <= 10; i++) {
//         document.write(num + " x " + i + " = " + num * i + "<br />")
//     }
// }
// else {
//     alert("Type only Number")
// }

// Q5

// var sub1 = prompt("Enter subject 1");
// var sub2 = prompt("Enter subject 2");
// var sub3 = prompt("Enter subject 3");
// var tMarks = 100;
// var mark1 = +prompt("Enter Marks of subject 1");
// var mark2 = +prompt("Enter Marks of subject 2");
// var mark3 = +prompt("Enter Marks of subject 3");
// var result1 = mark1 * tMarks / 100; 
// var result2 = mark2 * tMarks / 100; 
// var result3 = mark3 * tMarks / 100; 
// document.write(result1 + "%" + "<br />");
// document.write(result2 + "%" + "<br />");
// document.write(result3 + "%" + "<br />");



