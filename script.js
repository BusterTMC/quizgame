var questions = [
    {
        "question":"Who painted the Mona Lisa?",
        "options":["Vincent van Gogh","Papblo Picasso","Leonardo da Vinci","Michelangelo"],
        "answer":"Leonardo da Vinci"
    },
    {
        "question":"What is the capital of France?",
        "options":["Paris","Monaco","Marseille","Nice"],
        "answer":"Paris"
    },
    {
        "question":"What is the tallest mountain in the world?",
        "options":["K2","Mount Everest","Makalu","Lhotse"],
        "answer":"Mount Everest"
    },
    {
        "question":"What is the largest planet in our solar system?",
        "options":["Saturn","Uranus","Neptune","Jupiter"],
        "answer":"Jupiter"
    },
    {
        "question":"Who wrote the play Romeo and Juliet?",
        "options":["J.R.R. Tolkien","Charles Dickens","Lev Tolstoj","William Shakespeare"],
        "answer":"William Shakespeare"
    },
    {
        "question":"What is the capital city of Australia?",
        "options":["Perth","Canberra","Melbourne","Sydney"],
        "answer":"Canberra"
    },
    {
        "question":"What is the primary language spoken in Brazil?",
        "options":["French","Spanish","Portuguese","English"],
        "answer":"Portuguese"
    },
     {
        "question":"Who is known as the inventor of the lightbulb?",
        "options":["Thomas Edison","Nikola Tesla","Alexander Graham Bell","Albert Einstein"],
        "answer":"Thomas Edison"
    },
     {
        "question":"What is the largest ocean on Earth?",
        "options":["Indian","Atlantic","Pacific","Arctic"],
        "answer":"Pacific"
    },

];

quizbox = document.getElementById("quizbox");
quizbox.innerHTML = ""
questions.forEach((questions,index) => {
    var options = ''
    question.options.forEach((option,i) => {
        options += ` <li><label><input type="radio" name="opt-${index}" id=""> ${option}<label></li>`
    })
    quizbox.innerHTML += `<div class="quizdiv">
                <h4>Q ${index+1} ${question.question}</h4>
                <ul>
                ${options}
                </ul>
            </div>`;
});