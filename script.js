document.addEventListener("DOMContentLoaded", function () {
    // แกลเลอรีรูปภาพ
    const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
    let currentIndex = 0;
    const galleryImg = document.getElementById("gallery-img");
    
    document.getElementById("prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        galleryImg.src = images[currentIndex];
    });
    
    document.getElementById("next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        galleryImg.src = images[currentIndex];
    });

    // ควิซเกี่ยวกับแฟน
    const quizData = [
        {
            question: "แฟนชอบสีอะไร?",
            answers: ["แดง", "น้ำเงิน", "ชมพู"],
            correct: 2
        },
        {
            question: "แฟนชอบกินอะไร?",
            answers: ["พิซซ่า", "ซูชิ", "ส้มตำ"],
            correct: 1
        }
    ];

    let quizIndex = 0;
    const questionEl = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer");
    const resultEl = document.getElementById("result");

    function loadQuiz() {
        const currentQuiz = quizData[quizIndex];
        questionEl.textContent = currentQuiz.question;
        answerButtons.forEach((button, index) => {
            button.textContent = currentQuiz.answers[index];
            button.onclick = function () {
                checkAnswer(index);
            };
        });
    }

    function checkAnswer(index) {
        if (index === quizData[quizIndex].correct) {
            resultEl.textContent = "ถูกต้อง! 🎉";
        } else {
            resultEl.textContent = "ผิดน้า ลองใหม่ 💔";
        }
    }
    
    loadQuiz();

    // เพลงประกอบ
    const bgMusic = document.getElementById("bg-music");
    const playMusicBtn = document.getElementById("play-music");

    playMusicBtn.addEventListener("click", function () {
        if (bgMusic.paused) {
            bgMusic.play();
            playMusicBtn.textContent = "⏸ หยุดเพลง";
        } else {
            bgMusic.pause();
            playMusicBtn.textContent = "🎵 เล่นเพลง";
        }
    });
});
