<template>
    <div>
        <div class="heading" style="color:white;font-size:2rem">{{checkHand}}</div>
        <div class="columns is-mobile">
            <card :index="0"></card>
            <card :index="1"></card>
            <card :index="2"></card>
            <card :index="3"></card>
            <card :index="4"></card>
        </div>
        <button @click="dealCards">DEAL</button>
    </div>
</template>

<script>
    import Card from './Card'
    import { mapGetters } from 'vuex'
    export default {
        name: 'PokerRoom',

        components: {
            Card
        },

        computed: {
            ...mapGetters([
                'deck',
                'hand'
            ]),

            checkHand: function() {
                let outStr = "";
                let temp = [];

                this.hand.forEach(function(card) {
                    if(card.value === 'A')
                        temp.push(1);
                    else if(card.value === 'J')
                        temp.push(11);
                    else if(card.value === 'Q')
                        temp.push(12);
                    else if(card.value === 'K')
                        temp.push(13);
                    else
                        temp.push(parseInt(card.value));
                });

                temp.sort(function(a,b) {
                    return a - b;
                });

                // Warn if overriding existing method
                /*
                if(Array.prototype.equals)
                    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
                    */
                // attach the .equals method to Array's prototype to call it on any array
                Array.prototype.equals = function (array) {
                    // if the other array is a falsy value, return
                    if (!array)
                        return false;

                    // compare lengths - can save a lot of time
                    if (this.length !== array.length)
                        return false;

                    for (let i = 0, l=this.length; i < l; i++) {
                        // Check if we have nested arrays
                        if (this[i] instanceof Array && array[i] instanceof Array) {
                            // recurse into the nested arrays
                            if (!this[i].equals(array[i]))
                                return false;
                        }
                        else if (this[i] !== array[i]) {
                            // Warning - two different object instances will never be equal: {x:20} != {x:20}
                            return false;
                        }
                    }
                    return true;
                };
                // Hide method from for-in loops
                Object.defineProperty(Array.prototype, "equals", {enumerable: false});

                function isStraight() {
                    let straight = true;

                    for(let i = 0; i < 4; ++i) {
                        if(temp[i] !== temp[i+1] - 1) {
                            straight = false;
                            break;
                        }
                    }

                    if (temp === [1,10,11,12,13])
                        straight = true;

                    return straight;
                }

                function isFlush(hand) {
                    let flush = true;
                    let suit = hand[0].suit;

                    hand.forEach(function (card) {
                        if(card.suit !== suit) {
                            flush = false;
                        }
                    });

                    return flush;
                }

                function is4() {
                    let set = false;

                    if(temp.slice(0,4).equals([temp[0],temp[0],temp[0],temp[0]])
                        || temp.slice(1,5).equals([temp[1],temp[1],temp[1],temp[1]])) {
                        set = true;
                    }

                    return set;
                }

                function isFullHouse() {
                    let fh = false;

                    if((temp.slice(0,3).equals([temp[0],temp[0],temp[0]]) && temp.slice(3,5).equals([temp[3],temp[3]])
                        || (temp.slice(0,2).equals([temp[0],temp[0]]) && temp.slice(2,5).equals([temp[2],temp[2],temp[2]]))
                    )){
                        fh = true;
                    }

                    return fh;
                }

                function is3() {
                    let trips = false;

                    if(temp.slice(0,3).equals([temp[0],temp[0],temp[0]])
                        || temp.slice(1,4).equals([temp[1],temp[1],temp[1]])
                        || temp.slice(2,5).equals([temp[2],temp[2],temp[2]])
                    ){
                        trips = true;
                    }

                    return trips;
                }

                function is2Pair() {
                    let numPairs = 0;

                    if(temp.slice(0,2).equals([temp[0],temp[0]]))
                        numPairs++;
                    if(temp.slice(1,3).equals([temp[1],temp[1]]))
                        numPairs++;
                    if(temp.slice(2,4).equals([temp[2],temp[2]]))
                        numPairs++;
                    if(temp.slice(3,5).equals([temp[3],temp[3]]))
                        numPairs++;

                    return numPairs > 1;
                }

                function isPair() {
                    return !!(temp.slice(0, 2).equals([temp[0], temp[0]])
                        || temp.slice(1, 3).equals([temp[1], temp[1]])
                        || temp.slice(2, 4).equals([temp[2], temp[2]])
                        || temp.slice(3, 5).equals([temp[3], temp[2]]));
                }

                if(isStraight())
                    outStr += "Straight";

                if(isFlush(this.hand)) {
                    outStr += "Flush";
                } else if(is4()) {
                    outStr += "4 of a Kind";
                } else if(isFullHouse()) {
                    outStr += "Full House";
                } else if(is3()) {
                    outStr += "3 of a Kind";
                } else if(is2Pair()) {
                    outStr += "2 Pairs";
                } else if(isPair()) {
                    outStr += "Pair";
                }

                if(outStr.length > 0)
                    outStr += "!";

                return outStr;
            }
        },

        methods: {
            dealCards: function () {
                this.$store.dispatch('dealHand');
            }
        },
    }
</script>
