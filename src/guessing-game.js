class GuessingGame {
    constructor() {
        this.guessingArray = [];
        this.guessNumber = 0;
        this.min;
        this.max;
    }

    setRange(min, max) {
        for (let index = min; index <= max; index++) {
            this.guessingArray.push(index);
        }
        this.min = 0;
        this.max = this.guessingArray.length - 1;
    }

    guess() {
        this.guessNumber = Math.round((this.min + this.max) / 2);
        return this.guessingArray[this.guessNumber];
    }

    lower() {
        this.max = this.guessNumber;
    }

    greater() {
        this.min = this.guessNumber;
    }
}

module.exports = GuessingGame;
