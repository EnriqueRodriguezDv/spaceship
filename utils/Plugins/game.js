function Game(config){
    this.body = config.thisBody;
    this.containerShipOne = config.thisContainerShipOne;
    this.shipOne = config.thisShipOne;
    this.containerShipTwo = config.thisContainerShipTwo;
    this.shipTwo = config.thisShipTwo;
    this.containerBulletOne = config.thisContainerBulletOne;
    this.bulletOne = config.thisBulletOne;
    this.containerBulletTwo = config.thisContainerBulletTwo;
    this.bulletTwo = config.thisBulletTwo;
    this.containerLightningOne = config.thisContainerLightningOne;
    this.lightningOne = config.thisLightningOne;
    this.containerLightningTwo = config.thisContainerLightningTwo;
    this.lightningTwo = config.thisLightningTwo;
    this.positionShipOne = 4;
    this.positionShipTwo = 4;
    this.bulletPositionX = 1;
    this.bulletPositionY = null
    this.bulletPositionX2 = 8;
    this.bulletPositionY2 = null
    this.lightningPositionX = 2;
    this.lightningPositionY = null;
    this.lightningPositionX2 = 8;
    this.lightningPositionY2 = null;
    this.newBulletOne = true;
    this.newBulletTwo = true;
    this.newLightningOne = true;
    this.newLightningTwo = true;
    this.countPlayerOne = 0;
    this.countPlayerTwo = 0;
    this.shootTime = 50;
    this.pulsedBomb = this.genPulsedBomb();
    this.pulsedBomb2 = this.genPulsedBomb2();
    this.key();
}

Game.prototype.key = function(){
    this.body.onkeydown = () => {
        switch(event.keyCode){
            case 81: // Pulsed Bomb Player One
                if(this.newBulletOne === true){
                    this.bulletPositionY = this.positionShipOne
                    this.containerBulletOne.style.gridRow = this.bulletPositionY;
                    this.bulletOne.classList.remove("hidden")          
                    this.pulsedBomb.next();
                    this.newBulletOne = false
                } else {
                    this.pulsedBomb.next();
                }
            break;

            case 65: // Lightning Player One
                if(this.newLightningOne === true){
                    this.newLightningOne = false;
                    this.lightningPositionY = this.positionShipOne;
                    this.containerLightningOne.style.gridRow = this.lightningPositionY;
                    this.containerLightningOne.style.gridColumn = this.lightningPositionX;
                    this.lightningPositionX = 2
                    for(let index = 0; index < 10; index++){
                        setTimeout(() => {
                            if(this.lightningPositionX === 10){
                                this.victory();
                                this.lightningOne.classList.add("hidden");
                                this.lightningPositionY = null;
                                this.newLightningOne = true;
                            } else {
                                this.lightningOne.classList.remove("hidden");
                                this.containerLightningOne.style.gridColumn = this.lightningPositionX;
                                this.lightningPositionX++
                            }
                        }, this.shootTime * index)
                    }
                }
            break;
            
            case 69: // Ship One Up
                if(this.positionShipOne === 1){
                    this.positionShipOne = 1;
                } else {
                    this.positionShipOne--;
                    this.containerShipOne.style.gridRow = this.positionShipOne;
                }
            break;
            
            case 68: // Ship One Down
            if(this.positionShipOne === 7){
                this.positionShipOne = 7;
            } else {
                this.positionShipOne++;
                this.containerShipOne.style.gridRow = this.positionShipOne;
            }
            break;

            case 76: // Pulsed Bomb Player Two
                if(this.newBulletTwo === true){
                    this.bulletPositionY2 = this.positionShipTwo;
                    this.containerBulletTwo.style.gridRow = this.bulletPositionY2;
                    this.bulletTwo.classList.remove("hidden")          
                    this.pulsedBomb2.next();
                    this.newBulletTwo = false
                } else {
                    this.pulsedBomb2.next();
                }
            break;

            case 190: // Lightning Player Two
                if(this.newLightningTwo === true){
                    this.newLightningTwo = false;
                    this.lightningPositionY2 = this.positionShipTwo;
                    this.containerLightningTwo.style.gridRow = this.lightningPositionY2;
                    this.containerLightningTwo.style.gridColumn = this.lightningPositionX2;
                    this.lightningPositionX2 = 8
                    for(let index = 0; index < 9; index++){
                        setTimeout(() => {
                            if(this.lightningPositionX2 === 0){
                                this.lightningTwo.classList.add("hidden");
                                this.victory();
                                this.lightningPositionX2 = null;
                                this.newLightningTwo = true;
                            } else {
                                this.lightningTwo.classList.remove("hidden");
                                this.containerLightningTwo.style.gridColumn = this.lightningPositionX2;
                                this.lightningPositionX2--;
                            }
                        }, this.shootTime * index)
                    }
                }
            break;

            case 38: // Ship Two Up
            if(this.positionShipTwo === 1){
                this.positionShipTwo = 1;
            } else {
                this.positionShipTwo--;
                this.containerShipTwo.style.gridRow = this.positionShipTwo;
            }
            break;
            
            case 40: // Ship Two Down
            if(this.positionShipTwo === 7){
                this.positionShipTwo = 7;
            } else {
                this.positionShipTwo++;
                this.containerShipTwo.style.gridRow = this.positionShipTwo;
            }
            break;
        }
    }
    alert(`Player One
Ship Up: e
Ship Down: d
Pulsed Bomb: q
Lightning: a

Player Two
Ship Up: arrow up
Ship Down: arrow down
Pulsed Bomb: l
Lightning: .`)
}
Game.prototype.genPulsedBomb = function*(){
    while(true){
        yield setTimeout(() => {
            if(this.bulletPositionX === 8 ){
                this.victory();
                this.bulletOne.classList.add("hidden");
                this.bulletPositionX = 1;
                this.newBulletOne = true;
            } else {
                this.bulletPositionX++;
                this.containerBulletOne.style.gridColumn = this.bulletPositionX;
            }
        }, 0)
    }
}

Game.prototype.genPulsedBomb2 = function*(){
    while(true){
        yield setTimeout(() => {
            if(this.bulletPositionX2 === 1 ){
                this.victory();
                this.bulletTwo.classList.add("hidden");
                this.bulletPositionX2 = 8;
                this.newBulletTwo = true;
            } else {
                this.containerBulletTwo.style.gridColumn = this.bulletPositionX2;
                this.bulletPositionX2--;
            }
        }, 0)
    }
}

Game.prototype.victory = function(){
    if(this.positionShipOne === this.bulletPositionY2 && this.bulletPositionX2 === 1){
        this.countPlayerTwo++;
        alert(`Bullet!! Victory for Player Two!! ${this.countPlayerOne} - ${this.countPlayerTwo}`)
    }
    if(this.positionShipTwo === this.bulletPositionY && this.bulletPositionX === 8){
        this.countPlayerOne++;
        alert(`Bullet!! Victory for Player One!! ${this.countPlayerOne} - ${this.countPlayerTwo}`)
    }
    if(this.positionShipOne === this.lightningPositionY2 && this.lightningPositionX2 === 0){
        this.countPlayerTwo++;
        alert(`Lightning!! Victory for Player Two!! ${this.countPlayerOne} - ${this.countPlayerTwo}`)
    }
    if(this.positionShipTwo === this.lightningPositionY && this.lightningPositionX === 10){
        this.countPlayerOne++;
        alert(`Lightning!! Victory for Player One!! ${this.countPlayerOne} - ${this.countPlayerTwo}`)
    }   
}


export default Game;