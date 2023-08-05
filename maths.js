
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
[ "The shape of an ice-cream cone is a combination of:","Sphere + cylinder"," Sphere + cone"," Hemisphere + cylinder","Hemisphere + cone","D" ],
[ "If a cone is cut parallel to the base of it by a plane in two parts, then the shape of the top of the cone will be a:","Sphere","Cube","Cone itself"," Cylinder","C"],
[ "If r is the radius of the sphere, then the surface area of the sphere is given by;","4 π r²"," 2 π r²","π r²","4/3 π r²","A" ],
[ "Fifteen solid spheres are made by melting a solid metallic cone of base diameter 2cm and height 15cm. The radius of each sphere is:"," ½"," ¼","1/3√2"," 1/3√4","D" ],
[ "A tank is made of the shape of a cylinder with a hemispherical depression at one end. The height of the cylinder is 1.45 m and radius is 30 cm. The total surface area of the tank is:"," 30 m","3.3 m","30.3 m","3300 m","B"],
[ "The median of the data 13, 15, 16, 17, 19, 20 is:","30/2","31/2","33/2","35/2","C"],
[ "If the mean of first n natural numbers is 3n/5, then the value of n is:"," 3"," 4"," 5","6","C" ],
[ "If AM of a, a+3, a+6, a+9 and a+12 is 10, then a is equal to:"," 1"," 2"," 3","4","D" ]
];

function _(x){
return document.getElementById(x);
}
function renderQuestion(){
test = _("test");
if(pos >= questions.length){
test.innerHTML = "<h2>You scored "+correct+" of "+questions.length+"!</h2>";
"<h1>"+feedback();+"</h1>"

_("test_status").innerHTML = "Test Completed";
test.innerHTML += "<button style='width:100%; height:8%;background:linear-gradient(-225deg, powderblue,#40a1ff,#2b6dff,violet);border: 5px solid #6ab6ff;position:absolute;bottom:35%;'onclick='renderQuestion()'>Restart Quiz</button><br><br>";
test.innerHTML += "<button style='width:100%; height:8%;background:linear-gradient(-225deg, powderblue,#40a1ff,#2b6dff,violet);border: 5px solid #6ab6ff;position:absolute;bottom:25%;' onclick='goTo()'>Done</button>";

pos = 0;
correct = 0;
return false;
}
_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
question = questions[pos][0];
chA = questions[pos][1];
chB = questions[pos][2];
chC = questions[pos][3];
chD = questions[pos][4];
test.innerHTML = "<h3>"+question+"</h3>";
test.innerHTML += "<input type='radio' name='choices'value='A'><label onclick='doNot()'> "+chA+"</label><br><br>";
test.innerHTML += "<input type='radio' name='choices' value='B'><label onclick='doNot()'>"+chB+"</label><br><br>";
test.innerHTML += "<input type='radio' name='choices' value='C'><label onclick='doNot()'>"+chC+"</label><br><br>";
test.innerHTML += "<input type='radio'name='choices' value='D'> <label onclick='doNot()'>"+chD+"</label><br><br>";
test.innerHTML += "<button style='width:100%; position:absolute;right:0%;bottom:5%;height:10%;background:linear-gradient(-225deg, powderblue,#40a1ff,#2b6dff,violet);border: 5px solid #6ab6ff;'onclick='checkAnswer()'>Submit Answer</button>";

}

function checkAnswer(){
choices = document.getElementsByName("choices");
for(var i=0; i<choices.length; i++){
if(choices[i].checked){
choice = choices[i].value;
}
}
if(choice == questions[pos][5]){
correct++;
}
pos++;
renderQuestion();
}
window.addEventListener("load", renderQuestion, false);

function goTo(){
    window.location.href="Subject.html"
    }
function feedback(){
if (correct <= 1) {result2 = "I don't think you studied."};
if (correct>1 && correct<4) {result2 = "You need to spend more time. Try again."};
if (correct>4 && correct<6) {result2 = "I think you could do better. Try again."};
if (correct == 7) {result2 = "So close. Try again."};
if (correct == 8) {result2 = "Excellent! You're a pro!"};
document.getElementById("correct").innerHTML = result2;
}

function doNot(){
    alert("Press the circle to select the answer.")
}

