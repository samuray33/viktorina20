//Game_Elements
let TimeInGame = document.getElementById('TimeInGame');
let CountQuestions = document.getElementById('CountQuestions');

let TimeMin = 9;
let TimeSec = 59;
let res = "0" + TimeMin + ":" + TimeSec;

class Question{
    description 
    trueAnswer
    answer
}

let AllAnswers = [
    "Антарктида",
    "Килиманджар",
    "Виктория",
    "Нил",
    "Австралия",
    "Австралия",
    "Австрия",
    "Нидерланды",
    "Лондон",
    "Германия",
    "Греция",
    "Италия",
    "Пиза",
    "Норвегия",
    "Франция",
    "Будапешт",
    "Верхоянск",
    "США",
    "Ватикан",
    "Париж"
] 

let AllCountQuestions = [
    "Назовите самый южный континент земного шара, вечно покрытый сплошным слоем льда.",
    "Как называется самая высокая гора Африки, расположенная в Танзании?",
    "Какой водопад считается самым крупным в мире?",
    "Какая река считается важнейшей водной артерией Египта?",
    "Какой континент самый маленький в мире?",
    "Какой континент стал домом для самых необычных животных в мире: утконоса, ехидны, вомбата, коалы?",
    "На территории какого государства расположена европейская горная система Альпы?",
    "Какое государство часто называют «страной ветряных мельниц»?",
    "В каком городе расположен знаменитый Тауэрский мост?",
    "Бранденбургские ворота – это известная достопримечательность какого государства?",
    "Назовите страну – родину Олимпийских игр",
    "Какое государство по своим очертаниям напоминает сапог с высоким голенищем и островом в форме каблука?",
    "Самая знаменитая в мире башня выглядит так, будто она переворачивается. В каком городе находится «падающая» башня?",
    "Какое государство является самым северным из всех европейских стран?",
    "Какая страна заслуженно получила статус мирового лидера по производству сыра и вина?",
    "Назовите столицу – первый европейский город, в котором построили метро",
    "Назовите самый холодный город в мире",
    "Какую страну называют «страной неограниченных возможностей», в которой в начале ХХ века звучал лозунг «От мойщика тарелок в миллионеры!»",
    "Назовите самое маленькое в мире город-государство, которое, также, является официальной резиденцией Папы Римского",
    "В каком городе находится Эйфелева башня?"
];

let allQuestions = []
let current = -1;

for (let i = 0; i < AllAnswers.length; i++) {
    let q = new Question();
    q.description = AllCountQuestions[i];
    q.trueAnswer = AllAnswers[i];
    q.answer = "";
    allQuestions.push(q);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

shuffle(allQuestions);

let Questions = document.getElementById('Questions');
let Answer = document.getElementById('Answer');

let Count = 0;
let TrueCount = 0;

function onClickAnswer() {
    let q = allQuestions[current];
    q.answer = Answer.value;
    TrueCount += q.trueAnswer === q.answer ? 1 : 0;
    console.log(TrueCount);
    ShowNextQuestion();
}

function ShowNextQuestion() {
    current++;
    Count++;
    CountQuestions.innerText = Count + "/20";
    if(Count < 10){
        CountQuestions.innerText = "0" + Count + "/20";
    }
    Answer.value = "";
    if(Count > 20) {
        window.location.href = '../Game Win/Win_index.html?time=' + res + '&q=' + TrueCount;
    }
    let q = allQuestions[current];
    Questions.innerHTML = q.description;
}
ShowNextQuestion();

function Min(){
    TimeMin--;
    if(TimeMin <= -1){
        window.location.href = '../Game Win/Win_index.html?time=' + res + '&q=' + TrueCount;
    }
}

function Sec(){
    TimeSec--;
    if (TimeSec <= -1){
        TimeSec = 59;
    }
}

function Time(){
    res = "0" + TimeMin + ":" + TimeSec;
    if(TimeSec < 10){
        res = "0" + TimeMin + ":0" + TimeSec;
    }
    if(TimeMin < 1){
        TimeInGame.style.color = "red";
    }
    TimeInGame.innerHTML = res;
}

setInterval(Min, 60000);
setInterval(Sec, 1000);
setInterval(Time, 1000);
