    const Engine=Matter.Engine;
    const World=Matter.World;
    const Bodies=Matter.Bodies;

    var canvas;
    var bg;
    var chap;
    var world, engine;
    var gun;
    var burger,taco,meat,drink,donut;
    function preload(){
    bg=loadImage("images/bg.png");
    }

    function setup(){
    canvas=createCanvas(1300,600);
    engine=Engine.create();
    world=engine.world;
    chap= new Chap(1100,290,350,100);
    gun= new Gun(500,410,90,110);
    burger= new Burger(100,100);
    taco= new Taco(150,100);
    drink= new Drink(200,100);
    meat= new Meat(250,100);
    donut= new Donut(300,100);
    }

    function draw(){
    background(bg);
    Engine.update(engine);
    chap.display();
    gun.display();
    burger.display();
    taco.display();
    drink.display();
    meat.display();
    donut.display();
    }