
class Voiture {

    marque = "toyota"

    afficherMarque() {
        console.log("ma voiture est une " + this.marque)
    }

    afficherMarqueSansThis(marque) {
        console.log("ma voiture est une " + marque)
    }
}


const car = new Voiture()
car.afficherMarque();
car.afficherMarqueSansThis('renault')