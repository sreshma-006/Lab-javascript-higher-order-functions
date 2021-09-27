// Function #1: Array Slice

const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const modifiedFood = foods.slice(1,4);
console.log(modifiedFood);

// Function #2: Array Splice

const modifiedFoods = foods.splice(2, 0, 'noodles', 'icecream');
console.log(foods);

// Function #3: Filter

const numberArray = [12,324,213,4,2,3,45,4234];
const arrNum = numberArray.filter(function isEven(num){
    if(num % 2 == 0)
        return(num);
})
console.log(arrNum);

const prime = numberArray.filter(function isPrime(num){
    for(let i=2;i<numberArray.length/2;i++)
    {
        if(num % i != 0)
            return num;
    }
})
console.log(prime);

const nonprime = numberArray.filter(function isPrime(num){
    for(let i=2;i<numberArray.length/2;i++)
    {
        if(num % i ==0)
            return num;
    }
})
console.log(nonprime);

// Function #4: Reject 
const primeNum = numberArray.filter(function nonPrime(num){
    for(let i=2; i<num; i++)
    {   
        flag=0;
        if(num%i==0)
         {flag++; break;}
    }     
        if(flag!=0)
          return num;
         
    
})
console.log(primeNum);

// Function #5: Lambda

const numberArray1 = [3, 12, 42, 1326, 82, 152, 1698, 9, 21, 547, 981];
const arrNum1 = numberArray1.filter(numberArray1=>numberArray1%2==0)
console.log(arrNum1);

//  Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
const arrNum2 = myArray.map(function findSquareOfNumbers(num){
    return num*num;
})
console.log(arrNum2);

// Function #7: Reduce
const myArrays = [2,3,5,10];
const arrNum3 = myArrays.reduce(function multiply(sum, num){
    return sum * num;
},1)
console.log(arrNum3);