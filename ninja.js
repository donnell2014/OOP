class Ninja {
    constructor(name, health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log("Ninjas name is" ,this.name)
    }
    showStats(){
        console.log("*******************")
        console.log(this.name, "strength is:", this.strength)
        console.log(this.name, "health is:",   this.health)
        console.log(this.name, "speed is:",    this.speed)
        // console.log(this.name, "wisdom is", this.wisdom)
        console.log("*******************")
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name, health){
        super(name, health);
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("Its not the mountain thats stumbles you but the pebble in your shoe.")
    }
}
const ninja1 = new Ninja("Hyabusa",100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
// example output
const superSensei = new Sensei("Master Splinter",450);
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"



