
//Arrays----


let fr=['Apple','Banana','Mango','Orange','Pineapple','Paapaya','Guava','Leechi']
  for(let i=0;i<fr.length;i++)
  {
    console.log(fr[i]);
  }
  console.log(fr);





      //Array Methods--
      
     //Built-in Functions in Arrays--

  // 1- push()=  Add the elements at the end of an array
  // 2- pop()= Remove the elements from the end of an array
  // 3- shift()= Remove the elements from the beginning of an array
  // 4- unshift()= Add the elements at the beginning of an array
  // 5- splice()= Add or Remove elemnents from the array range
  // 6- slice()= Copy elements from the array
  // 7- indexoff()= Find the Index of the Elements
  // 8- concat() =Merge two arrays
  // 9- map() =Interate over the array *****MI
  // 10- filter() = Filter the elements of an array
  // 11- forEach() = Iterate over the array




  console.log("------")


  //let fr=['Apple','Banana','Mango','Orange']

  console.log(fr[3])//Positive Indexing

  console.log(fr[-2])//Negative Indexing

  console.log(fr.length)//Length of an Array




  



////Built-in Functions in Arrays--


  //push()

   fr.push('Strawberry')
  console.log(fr)

  //pop()

  console.log('-------')

  console.log(fr.pop)
  console.log(fr)
  
   //shift()
   console.log(fr.shift())
   console.log(fr)

   // unshift()
   console.log(fr.unshift('Kiwi'))
   console.log(fr)


   //splice()
   console.log(fr.slice(2,5))
   console.log(fr)

   


  //indexOff()
  console.log(fr.indexOf('Strawberry'))
  console.log(fr)


 //concat()
 console.log(fr.concat('Potato'))





















   console.log('-----------')


   //Iteration using Loop--

   let nums=[1,2,3,4,5,6,7,8,9,10];

   for (i=0;i<nums.length;i++)
   {
     console.log(nums[i]**2)
   }
   console.log("-----------")

   //Iteration using foreach() function--]
     
   nums.forEach((i) =>
   {
    console.log(i**2)
   })  


//Iteration using map()--  New Array Answer---

let square = nums.map((x) => x**2)
console.log(square)




//filter()
let odd =nums.filter((x) => x%2!=0)
console.log(odd)

let even =nums.filter((x) => x%2==0)
console.log(even)





         //Examples---

let col=['Red','Black','White','Blue','Yellow','Grey','Brown','Purple','Orange']
console.log(col)
let col1=col.filter((x) => x.length>4)
console.log(col1)



let p=[1000,2000,3000,4000,5000,6000,7000,8900]
console.log[p]

let r=p.filter((x) => x>1000 && x<=9000 )
console.log(r)







let fruits= ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Grapes', 'Watermelon', 'Kiwi', 'Papaya', 'Guava']
console.log(fruits)

// Array Methods
console.log('-------------------')










// 1. push() - add element at the end of the array
// 2. pop() - remove element from the end of the array
// 3. shift() - remove element from the beginning of the array
// 4. unshift() - add element at the beginning of the array
// 5. splice() - add or remove element from the array
// 6. slice() - copy elements from the array
// 7. indexOf() - find the index of the element
// 8. concat() - merge two arrays
// 9. map() - iterate over the array
// 10. filter() - filter the elements of the array
// 11. forEach() - iterate over the array

console.log(fruits[4])
console.log(fruits.length)
console.log(fruits[6])
console.log(fruits.slice(2,7))

fruits.push('Strawberry')
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.unshift('Apple')
console.log(fruits)

let veg = ['Potato', 'Tomato', 'Onion', 'Carrot', 'Cabbage']
let newArray = veg.concat(fruits)
console.log(newArray)

let index = fruits.indexOf('Mango')
console.log(index)

