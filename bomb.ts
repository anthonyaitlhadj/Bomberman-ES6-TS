class Bomb {
	_strength;
	_timer;
	_exploded;

	constructor(strength, timer = 2){
		this._strength = strength;
		this._timer = timer;
	}

	set strength(strength){
		this.strength = strength;
	}
	get strength() {
		return this._strength;
	}

	explode() {

	}
}