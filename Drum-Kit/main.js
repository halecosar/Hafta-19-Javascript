document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btn1").addEventListener("click", function () {
        play("audio1");
    });

    document.getElementById("btn2").addEventListener("click", function () {
        play("audio2");
    });

    document.getElementById("btn3").addEventListener("click", function () {
        play("audio3");
    });

    document.getElementById("btn4").addEventListener("click", function () {
        play("audio4");
    });

    document.getElementById("btn5").addEventListener("click", function () {
        play("audio5");
    });

    document.getElementById("btn6").addEventListener("click", function () {
        play("audio6");
    });

    document.getElementById("btn7").addEventListener("click", function () {
        play("audio7");
    });

    document.getElementById("btn8").addEventListener("click", function () {
        play("audio8");
    });

    document.getElementById("btn9").addEventListener("click", function () {
        play("audio9");
    });


    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "a": play("audio1");
                break
            case "s": play("audio2");
                break
            case "d": play("audio3");
                break
            case "f": play("audio4");
                break
            case "g": play("audio5");
                break
            case "h": play("audio6");
                break
            case "j": play("audio7");
                break
            case "k": play("audio8");
                break
            case "l": play("audio9");

        }
    })

    function play(audioType) {
        var audioElement = document.getElementById(audioType);
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }
})

