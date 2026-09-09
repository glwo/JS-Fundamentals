// Define a slot machine with three reels that can individually spin(), and then display() the current contents
// of all the reels. The basic behavior of a single reel is defined in the reel object below. But the slot machine
// needs individual reelsae(wtf is this word?) objects that delegate the reel, and which each have a position property

// A reel only knows how to display() its current slot symbol, but a slot machine typically shows three symbols
// per reel: the current slot(position), one slot above (position - 1) and one slot below (position + 1). So
// displaying the slot machine should end up displaying a 3x3 grid of slot symbols.

function randMax(max: number) {
  return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
  symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

var slotMachine = {
  reels: [
    // this slot machine needs 3 separate reels
    // hint object.create(...)
    Object.create(reel),
    Object.create(reel),
    Object.create(reel),
  ],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    // TODO
    for (let i = 0; i < 3; i++) {
      const line = `${this.reels[0].display()} | ${this.reels[1].display()} | ${this.reels[2].display()}`;
      console.log(line);
      this.spin();
    }
  },
};

slotMachine.spin();
slotMachine.display();
// < | @ | *
// @ | X | <
// X | Y | @

slotMachine.spin();
slotMachine.display();
// Z | X | W
// W | Y | $
// $ | Z | *
