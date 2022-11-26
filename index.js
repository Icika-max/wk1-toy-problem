// functions for calculatng grades
const calculate = () => {
    //Getting input from user into the heights of viriable
    let chemistry = document.querySelector("#chemistry").value
    let hindi = document.querySelector ("#Hindi").value
    let maths=document.querySelector ("#maths").value
    let phy =document.querySelector("#phy").value
    let grade= "";
}
// input is string so typecasting is necessary
let totalGrades =
parseFloat(chem)+
parseFloat(maths)+
parseFloat(eng)+
parseFloat(phy);

// checkig the conditions for providing the grades to the student
let percentage=(totalGrades/400)*100
if(percentage<=100 && percentage >=80){
    grade = "A"
}
else if(percentage<=79 && percentage>=60){
grade = "B"}
else if(percentage<=59 && percentage>=50){
grade = "C"
}
else if (percentage<=49 && percentage>= 40){
    grade = "D"
}
else{
    grade= "E"

}
// checking the values are empty, if empty then
// show plase fill them
if (chem=="" || maths=="" || eng =="" ||phy =="")
{
    document.querySelector("#showdata").innerHTML = "Please enter all the fields"
}
else {
    //check the condition for the field and pass
    if (percentage>=39.5){
        document.querySelector("#showdata").innerHTML=
        `out of 400 your total i ${totalGrades} and percentage is ${percentage}.<br>
        your grade is ${grade}.you are pass.`

    }
    else { document.querySelector("#showdata").innerHTML=
    `outof 400 your total score is ${totalGrades} and percentage is ${percentage}.<br>
    your grade is ${grade}. you are fail`;
}
}