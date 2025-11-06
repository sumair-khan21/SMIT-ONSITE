// // Street Fighter Game
// class Fighter {
//     constructor(element, isPlayer1) {
//         this.element = element;
//         this.isPlayer1 = isPlayer1;
//         this.health = 100;
//         this.position = isPlayer1 ? 100 : 620;
//         this.isJumping = false;
//         this.isFacing = isPlayer1 ? 1 : -1;
//         this.element.style.left = this.position + 'px';
//     }

//     move(direction) {
//         const speed = 10;
//         const newPosition = this.position + (direction * speed);
        
//         // Boundary check
//         if (newPosition >= 0 && newPosition <= 720) {
//             this.position = newPosition;
//             this.element.style.left = this.position + 'px';
//         }
//     }

//     jump() {
//         if (!this.isJumping) {
//             this.isJumping = true;
//             const originalBottom = parseInt(getComputedStyle(this.element).bottom);
            
//             // Jump animation
//             let jumpHeight = 0;
//             const jumpInterval = setInterval(() => {
//                 if (jumpHeight < 150) {
//                     jumpHeight += 10;
//                     this.element.style.bottom = (originalBottom + jumpHeight) + 'px';
//                 } else {
//                     clearInterval(jumpInterval);
//                     this.fall(originalBottom);
//                 }
//             }, 20);
//         }
//     }

//     fall(originalBottom) {
//         let currentHeight = 150;
//         const fallInterval = setInterval(() => {
//             if (currentHeight > 0) {
//                 currentHeight -= 10;
//                 this.element.style.bottom = (originalBottom + currentHeight) + 'px';
//             } else {
//                 clearInterval(fallInterval);
//                 this.isJumping = false;
//             }
//         }, 20);
//     }

//     attack(type) {
//         const animation = type === 'punch' ? 'punch' : 'kick';
//         this.element.classList.add(animation);
//         setTimeout(() => this.element.classList.remove(animation), 200);
        
//         // Check if hit connects
//         this.checkHit();
//     }

//     checkHit() {
//         const opponent = this.isPlayer1 ? player2 : player1;
//         const distance = Math.abs(this.position - opponent.position);
        
//         if (distance < 100) {
//             opponent.takeHit();
//         }
//     }

//     takeHit() {
//         this.health -= 10;
//         this.updateHealthBar();
//         this.element.classList.add('hit');
//         setTimeout(() => this.element.classList.remove('hit'), 200);
        
//         if (this.health <= 0) {
//             endGame(this.isPlayer1 ? 'Player 2' : 'Player 1');
//         }
//     }

//     updateHealthBar() {
//         const healthBar = document.getElementById(this.isPlayer1 ? 'p1-health' : 'p2-health');
//         healthBar.style.width = this.health + '%';
//     }
// }

// // Initialize players
// const player1 = new Fighter(document.getElementById('player1'), true);
// const player2 = new Fighter(document.getElementById('player2'), false);

// // Timer
// let timeLeft = 90;
// const timerElement = document.querySelector('.timer');
// const timer = setInterval(() => {
//     timeLeft--;
//     timerElement.textContent = timeLeft;
//     if (timeLeft <= 0) {
//         endGame('Time Up!');
//     }
// }, 1000);

// // Controls
// document.addEventListener('keydown', (event) => {
//     switch(event.key) {
//         // Player 1 controls
//         case 'a':
//             player1.move(-1);
//             break;
//         case 'd':
//             player1.move(1);
//             break;
//         case 'w':
//             player1.jump();
//             break;
//         case 'f':
//             player1.attack('punch');
//             break;
//         case 'g':
//             player1.attack('kick');
//             break;

//         // Player 2 controls
//         case 'ArrowLeft':
//             player2.move(-1);
//             break;
//         case 'ArrowRight':
//             player2.move(1);
//             break;
//         case 'ArrowUp':
//             player2.jump();
//             break;
//         case 'l':
//             player2.attack('punch');
//             break;
//         case ';':
//             player2.attack('kick');
//             break;
//     }
// });

// function endGame(winner) {
//     clearInterval(timer);
//     alert(winner + ' wins!');
//     location.reload();
// }


// -----------------------------------------------

//TODO APP WITH LOCAL STORAGE

    let inp = document.getElementById('input');
    let todo = document.getElementById('todo');
   let arr = []; 

render(){
    for(let i = 0; i < arr.length; i++){
        
    }

}

    function addTodo(){
arr.push(inp.value);
localStorage.setItem("todo", JSON.stringify(arr));
inp.value = "";
console.log(arr);

    }
