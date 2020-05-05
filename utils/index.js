import Game from './Plugins/game.js'

const body = document.getElementById("body");
const containerShipOne = document.getElementById("containerShipOne");
const shipOne = document.getElementById("shipOne");
const containerShipTwo = document.getElementById("containerShipTwo");
const shipTwo = document.getElementById("shipTwo");
const containerBulletOne = document.getElementById("containerBulletOne");
const bulletOne = document.getElementById("bulletOne");
const containerBulletTwo = document.getElementById("containerBulletTwo");
const bulletTwo = document.getElementById("bulletTwo");
const containerLightningOne = document.getElementById("containerLightningOne");
const lightningOne = document.getElementById("lightningOne");
const containerLightningTwo = document.getElementById("containerLightningTwo");
const lightningTwo = document.getElementById("lightningTwo");

const playerOne = new Game({
    thisBody: body,
    thisContainerShipOne: containerShipOne,
    thisShipOne: shipOne,
    thisContainerShipTwo: containerShipTwo,
    thisShipTwo: shipTwo,
    thisContainerBulletOne: containerBulletOne,
    thisBulletOne: bulletOne,
    thisContainerBulletTwo: containerBulletTwo,
    thisBulletTwo: bulletTwo,
    thisContainerLightningOne: containerLightningOne,
    thisLightningOne: lightningOne,
    thisContainerLightningTwo: containerLightningTwo,
    thisLightningTwo: lightningTwo,
})
