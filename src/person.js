
export default {
    isAdult(x) {
        if (x >= 21){
            return true;
        } else {
            return false;
        }
    },

    canDrink(x) { 
        return x >= 21;
    },

    isSenior(x) {
        return x >= 65;
    }
}
