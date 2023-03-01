class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
         
          function display(){
            console.log(this.nom+this.age)
          }
    }
}

let Personne1 = new Personne("Alexis", 26)

let Personne2 = new Personne("Mathys", 21)

console.log(Personne1)
console.log(Personne2)