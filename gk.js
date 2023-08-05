
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
[ "Fathometer is used to measure ", "Earthquakes", "Rainfall", "Ocean depth","Sound intensity","C" ],
[ "Epsom(England) is the place associated with: ", "Snooker", "Shooting", "Polo", "Horse racing","D"],
[ "Golf player Vijay Singh belongs to which country? ", "USA", "Fiji", "India", "UK","B" ],
[ "Which is a green planet in the solar system?", "Pluto", "Venus", "Uranus", "Mars","C" ],
[ "The first news paper in the world was started by ?", "Japan", "China","USA","India","B"],
[ "Who is known as Man of Blood and Iron ?", "Napoleon", "Ho Chi Minh", "Sir Walter Scott", "Bismarck","D"],
[ "Which is considered as oldest civilization of the world ? ", "Mesopotamian Civilization", "Harappan Civilization", "Chinese Civilization", "Egyptain Civilization","A" ],
[ "Which among following is called 'Gift of the Nile' ?", "China", "India", "Iraq", "Egypt","D" ]
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
test.innerHTML += "<button style='width:100%; position:absolute;right:0%;bottom:10%;height:10%;background:linear-gradient(-225deg, powderblue,#40a1ff,#2b6dff,violet);border: 5px solid #6ab6ff;'onclick='checkAnswer()'>Submit Answer</button>";

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
