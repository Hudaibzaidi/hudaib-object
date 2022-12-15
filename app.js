var boys = [
    {
      name:"Syed Hudaib Hussain Zaidi",
      age:18,
      course:"web Davalopment",
      rollNum:"12345"  
    },
    {
        name:"alighul",
        age:19,
        course:"web Davalopment",
        rollNum:"16538"  
      },
      {
        name:"ali abbas",
        age:20,
        course:"web Davalopment",
        rollNum:"03647"  
      },
      {
        name:"shazaib",
        age:21,
        course:"web Davalopment",
        rollNum:"45705"  
      },
      {
        name:"hashim",
        age:22,
        course:"web Davalopment",
        rollNum:"73745"  
      },
      {
        name:"ghazanfar",
        age:23,
        course:"web Davalopment",
        rollNum:"45785"  
      },
      {
        name:"hussain",
        age:24,
        course:"web Davalopment",
        rollNum:"95375"  
      },
      {
        name:"muhammad",
        age:25,
        course:"web Davalopment",
        rollNum:"13575"  
      },
      {
        name:"ali",
        age:26,
        course:"web Davalopment",
        rollNum:"13395"  
      },
      {
        name:"noman",
        age:27,
        course:"web Davalopment",
        rollNum:"22745"  
      },
      {
        name:"shabaz",
        age:28,
        course:"web Davalopment",
        rollNum:"13445"  
      },
      {
        name:"abubaker",
        age:29,
        course:"web Davalopment",
        rollNum:"43960"  
    },
] 

var inp = document.getElementById("inp")
var p = document.getElementById("p")
var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")
var p3 = document.getElementById("p3")

function display(){
    console.log("RUN")
for(var i = 0; i < boys.length; i++){
    if(inp.value == boys[i].name || inp.value == boys[i].age || inp.value == boys[i].course || inp.value == boys[i].rollNum){
        p.innerHTML = boys[i].name; 
        p1.innerHTML = boys[i].age; 
        p2.innerHTML = boys[i].course; 
        p3.innerHTML = boys[i].rollNum; 
        inp.value = ""
    }
}
}