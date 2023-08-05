
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
[ "The purest form of iron is "," wrought iron","steel","pig iron","nickel steel","A" ],
[ "SI unit of equivalent conductance","ohm/cm","Siemens m2/equivalent","Siemens/equivalent","mho/cm","B"],
[ "Hydrogen bomb is based on the principle of  "," nuclear fission","nuclear fusion","natural radioactivity"," artificial radioactivity","B" ],
[ "Silver Mirror test is given by which one of the following compounds? 1. Benzophenone 2. Acetaldehyde 3. Acetone 4. Formaldehyde"," Only 1"," Only 2","1 and 3","2 and 4","D" ],
[ "Which of the following is a non metal that remains liquid at room temperature?","Chlorine","Phosphorous","Bromine","Helium","C"],
[ "Which pair of atoms has the highest electronegativity difference?<br>(Calcium's electronegativity is 1.0<br>Fluorine's electronegativity is<br>4.0<br>Hydrogen's electronegativity is 2.2<br>Sodium's electronegativity is 0.93)"," F-F","Ca-F"," H-F","Na-F","D"],
[ "which of the following are chemical changes?<br>A) Cooking of Food<br>B) Digestion of Food<br>C) Freezing of water<br>D) Water is heated up","A & B","A, B & C"," C & D","All the above","A" ],
[ "Mg+O2=MgO<br>Balance the above Chemical equation?","2Mg + O2 ----> 2MgO","2Mg + O ----> 2MgO","2Mg + O ----> MgO2","2Mg + O2 ----> MgO2","A" ]
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
