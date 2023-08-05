
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
[ "The staple food of the Vedic Aryan was"," Barley and rice","Milk and its products","Rice and pulses","Vegetables and fruits","B" ],
[ "Which river of India is called Vridha Ganga?"," Krishna"," Godavari"," Kaveri","Narmada","B"],
[ "National Income estimates in India are prepared by","Planning Commission","Reserve Bank of India","Central statistical organisation","Indian statistical Institute","C" ],
[ "The paintings in the Ajanta and Ellora caves are indicative of the development of art under the -","Pallavas","Chalukyas","Pandyas","Rashtrakutas","B" ],
[ "'Madhubani', a style of folk paintings, is popular in which of the following states in India?","Uttar Pradesh","Rajasthan","Madhya Pradesh"," Bihar","D"],
[ "The main source of National Income in India is","Service Sector"," Agriculture"," Industrial Sector","Trade Sector","A"],
[ "The Saka Era was founded by","Kadphises I","Kanishka","Alexander","Menander","B" ],
[ "The tropic of cancer does not pass through which of these Indian states ?"," Madhya Pradesh","West Bengal"," Rajasthan","Odisha","D" ]
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
