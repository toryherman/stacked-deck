var StackedDeck = function (code) {
	this.deck = [
		"Ad", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "Jd", "Qd", "Kd",
		"As", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "Js", "Qs", "Ks",
		"Ah", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "Jh", "Qh", "Kh",
		"Ac", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c", "Jc", "Qc", "Kc"
	];
	
	this.code = code || "none";
};

StackedDeck.prototype = {
	shuffle: function() {
		if (typeof this.code !== "number") {
			//each loop remove first card and place it in random index
			for (var i = 0; i < this.deck.length; i++) {
				var x = Math.floor(Math.random()*52),
					card = this.deck.shift();

				this.deck.splice(x, 0, card);		
			}
		} else if (typeof this.code === "number") {
			//if a code is entered, use a consistent shuffle based on code number instead of random
			//each loop remove first card and move it i+code places in array
			//if code is too high, just moves first card to the end and won't shuffle cards
			for (var i = 0; i < this.deck.length; i++) {
				var x = i + this.code,
					card = this.deck.shift();

				this.deck.splice(x, 0, card);		
			}
		}
		return this.deck;
	}
};