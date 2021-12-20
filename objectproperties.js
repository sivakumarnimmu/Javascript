//creting object
let person=
{
    //Initilize properties
    firstname:"Sivakumar",
    lastname:"Nimmu",
    Weight:60,
    age:37
}
// accessing object and calling properties
l1=person.age
console.log(l1);
l2=person.Weight
console.log(l2);
// Add new proprty to the object
person.height=5.6;
console.log(person.height);
// Update existing property
person.Weight=65;
console.log(person.Weight);
//Remove the property
//delete person(age)
//console.log(person.age);
// for in loop
for(let x in person)
    {
        console.log(x)
        console.log(person[x]);
        console.log(x+ "  " +person[x]);
}