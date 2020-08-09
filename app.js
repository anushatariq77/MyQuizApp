var questionsArray=[
  {
      question:"Entomology is the science that studies",
      answer:"Insects",
      options:[
          "Behavior of human beings",
          "Insects",
          "The origin and history of technical and scientific terms",
          "The formation of rocks"
      ]
  },
  {
      question:"Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
      answer:"Africa",
      options:[
        "Asia",
        "Africa",
        "Europe",
        "Australia"
      ]
  },
  {
      question:"Garampani sanctuary is located at",
      answer:"Diphu, Assam",
      options:[
          "Junagarh, Gujarat",
          "Diphu, Assam",
          "Kohima, Nagaland",
          "Gangtok, Sikkim"
      ]
  },
  {
      question:"Grand Central Terminal, Park Avenue, New York is the world's",
      answer:"largest railway station",
      options:[
        "largest railway station",
        "highest railway station",
        "longest railway station",
        "None of the above"
      ]
  },
  {
      question:"For which of the following disciplines is Nobel Prize awarded?",
      answer:"All of the above",
      options:[
          "Physics and Chemistry",
          "Physiology or Medicine",
          "Literature, Peace and Economics",
          "All of the above"
      ]
  },
  {
    question:"Hitler party which came into power in 1933 is known as",
    answer:"Nazi Party",
    options:[
        "Labour Party",
        "Nazi Party",
        "Ku-Klux-Klan",
        "Democratic Party"
    ]
},
{
  question:"In which year of First World War Germany declared war on Russia and France?",
  answer:"1914",
  options:[
      "1914",
      "1915",
      "1916",
      "1917"
  ]
},
{
  question:"In which of the following years, the membership of the Security Council was increased from 11 to 15 (under Article 23)?",
  answer:"1965",
  options:[
      "1960",
      "1965",
      "1972",
      "1975"
  ]
},
{
  question:"In which season do we need more fat?",
  answer:"Winter",
  options:[
      "Rainy season",
      "Summer",
      "Winter",
      "Spring"
  ]
},
{
  question:"In a normal human body, the total number of red blood cells is",
  answer:"30 trillion",
  options:[
      "15 trillion",
      "20 trillion",
      "25 trillion",
      "30 trillion"
  ]
},
]

function showQuestion(e){
  var questionElement=document.getElementById("questionElement")
  questionElement.innerHTML=questionsArray[e].question
  var optionElement=document.getElementsByClassName("optionElement")
  
  for(var i=0;i<optionElement.length;i++){
      optionElement[i].innerHTML=questionsArray[e].options[i]
  }
}
var questioncount=0;
var score=0;

function nextQuestion(){
  validate(questioncount)
  questioncount++;
  removeActiveClass()
  if(questionsArray[questioncount]!=null){
      showQuestion(questioncount) 
  }
  else{
      console.log("finish")
      var card=document.getElementsByClassName("card")[0]
      card.style.display="none"
      var a=document.createElement("h1")
      var text=document.createTextNode("Your Score is : "+score+"/10")
      a.appendChild(text)
      document.getElementsByClassName("score")[0].appendChild(a)
  }
}
function putActive(e){
   removeActiveClass()
e.classList.add("active")
}
function removeActiveClass(){
  var active=document.getElementsByClassName("active")
  for(var i=0;i<active.length;i++){
      active[i].classList.remove("active")
  }
}
function validate(e){
  var active=document.getElementsByClassName("active")[0]
  var a=active.innerHTML
  if(a==questionsArray[e].answer){
      score=score+1;
  }
}