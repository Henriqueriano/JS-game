let playerInfo = 
    {
        x: 0,
        y: 0,
        step: 10,
        width: 20,
        height: 20,
        score: 0,
        lives: 3,
        gameOver: false
    }
// Esse arquivo é o fluxo do jogo ao carregar a página;
const _game = () => 
    {
        let gCanvas = document.getElementById("gameCanvas");
        let gContext = gCanvas.getContext("2d");
        frameGen(gContext,playerInfo);
        gCanvas.addEventListener("click", () => gCanvas.focus());
        gCanvas.addEventListener("keypress", (event) => 
            {
                if (event.key === "w") 
                    {   
                        //TODO: fazer a colisão com a borda de forma dinâmica;
                        // if (playerInfo.y != 0 && playerInfo.y != 700)
                            playerInfo.y -= playerInfo.step;
                    }
                else if (event.key === "s") 
                    {
                            playerInfo.y += playerInfo.step;
                    }
                else if (event.key === "a") 
                    {
                            playerInfo.x -= playerInfo.step;
                    }
                else if (event.key === "d") 
                    {
                            playerInfo.x += playerInfo.step;
                    };
            });
            newFrame();
    }

const newFrame = () => 
    {
        let gCanvas = document.getElementById("gameCanvas");
        let gContext = gCanvas.getContext("2d");
        let pInfo = playerInfo;
        frameClear(gContext, gCanvas);
        frameGen(gContext, pInfo);
        requestAnimationFrame(newFrame);
    }

const frameClear = (gameContext, gameCanvas) => 
    {
            gameContext.fillStyle = "white";
            let width = gameCanvas.width;
            let height = gameCanvas.height;
            gameContext.fillRect(0, 0, width, height);    
    }
const frameGen = (gameContext, playerInfo) => 
    {
        gameContext.fillStyle = "blue";
        let x = playerInfo.x;
        let y = playerInfo.y;
        gameContext.fillRect(x, y, 10, 10);
    }

window.onload = _game;