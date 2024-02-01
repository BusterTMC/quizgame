var questions = [
    {
        "question":"Who painted the Mona Lisa?",
        "option":["Vincent van Gogh","Papblo Picasso","Leonardo da Vinci","Michelangelo"],
        "answer":"Leonardo da Vinci"
    },
    {
        "question":"What is the capital of France?",
        "option":["Paris","Monaco","Marseille","Nice"],
        "answer":"Paris"
    },
    {
        "question":"What is the tallest mountain in the world?",
        "option":["K2","Mount Everest","Makalu","Lhotse"],
        "answer":"Mount Everest"
    },
    {
        "question":"What is the largest planet in our solar system?",
        "option":["Saturn","Uranus","Neptune","Jupiter"],
        "answer":"Jupiter"
    },
    {
        "question":"Who wrote the play Romeo and Juliet?",
        "option":["J.R.R. Tolkien","Charles Dickens","Lev Tolstoj","William Shakespeare"],
        "answer":"William Shakespeare"
    },
    {
        "question":"What is the capital city of Australia?",
        "option":["Perth","Canberra","Melbourne","Sydney"],
        "answer":"Canberra"
    },
    {
        "question":"What is the primary language spoken in Brazil?",
        "option":["French","Spanish","Portuguese","English"],
        "answer":"Portuguese"
    },
     {
        "question":"Who is known as the inventor of the lightbulb?",
        "option":["Thomas Edison","Nikola Tesla","Alexander Graham Bell","Albert Einstein"],
        "answer":"Thomas Edison"
    },
     {
        "question":"What is the largest ocean on Earth?",
        "option":["Indian","Atlantic","Pacific","Arctic"],
        "answer":"Pacific"
    },

];

quizbox = document.getElementById("quizbox");
quizbox.innerHTML = ""
questions.forEach((questions,index) => {
    quizbox.innerHTML += `<div class="quizdiv">
                <h4>Q: Did yo like this video?</h4>
                <ul>
                <li> <input type="radio" name="" id="">Option 1</li>
                <li> <input type="radio" name="" id="">Option 1</li>
                <li> <input type="radio" name="" id="">Option 1</li>
                <li> <input type="radio" name="" id="">Option 1</li>
                </ul>
            </div>`;
});