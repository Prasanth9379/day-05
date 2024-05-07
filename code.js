//creating resume by using JSON format

var resume=[{
    "name":"Prasanth S",
    "father name":"Suresh babu D",
    "gender":"Male",
    "marital Status":"Single",
    "nationality":"Indian"
  
}]

//using For loop
for(var i=0;i<resume.length;i++){
  var obj=resume[i]
}
console.log(obj.name);
console.log(obj.gender);

//using for each loop
resume.forEach(function(obj) { console.log(obj.nationality); });

//using for in loop
for(var i in resume){
console.log(i,resume[i]);
}

//using for of loop
for (const element of resume) {
  console.log(resume);
}
