document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    let cardOne = -1;
    let count = 0;
    const button = document.querySelector('.btn');
    let flag = 0;

    function clickCard(card) {
        let timer = -1;
        const element = card.srcElement;
        element.style.backgroundColor = "#ff33ff";
        element.style.color = "#000000";

        if (cardOne === -1) {
            cardOne = element;
        } else {
            if (cardOne.textContent === element.textContent) {
                element.style.backgroundColor = "#FF4500";
                cardOne.style.backgroundColor = "#FF4500";
                count++
                cardOne = -1;
            } else {
                element.style.backgroundColor = "#FFFFFF";
                cardOne.style.backgroundColor = "#FFFFFF";
                timer = setInterval(function() {
                    element.style.color = "#FFFFFF";
                    cardOne.style.color = "#FFFFFF";
                    cardOne = -1;
                    clearInterval(timer);
                }, 1000);
            }
            
        }
        if (count > 7) {
            button.style.visibility = "visible";
        }
        
    }

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }

      function restart() {
        shuffle(arr);
        count = 0;
        for (const card of cards) {
            card.style.color = "#FFFFFF"
            card.style.backgroundColor = "#FFFFFF";
        }
      }


    let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    shuffle(arr);
    
    let i = 0;
    for (const card of cards) {
        card.style.color = "#FFFFFF"
        card.textContent = arr[i];
        i++;
        card.addEventListener('click', {handleEvent: clickCard, card: card});
        
    }
    
    button.addEventListener('click', restart);
});   
