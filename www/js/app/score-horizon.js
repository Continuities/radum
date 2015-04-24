/**
 *	Score Horizon
 *	horizon animation that scores the board
 *	(c) doublespeak games 2015	
 **/

define(['app/util', 'app/graphics'], function(Util, Graphics) {

	var DURATION = 5000
	, MAX_RADIUS = 300
	;

	function ScoreHorizon(player, coords) {
		this._scale = 0;
		this._coords = coords;
		this._player = player;
		this._stopped = false;
	}
	ScoreHorizon.prototype = {
		draw: function(delta) {
			if (!this._stopped && this._scale < 1) {
				this._scale += delta / DURATION;
				this._scale = this._scale >= 1 ? 1 : this._scale;
			}
			Graphics.circle(
				this._coords.x 
				, this._coords.y
				, MAX_RADIUS * this._scale 
				, 'primary' + this._player
				, null 
				, 0
				, 0.3
			);
		},
		stop: function() {
			this._stopped = true;
		}
	}

	ScoreHorizon.DURATION = DURATION;
	ScoreHorizon.RATE = DURATION / MAX_RADIUS; // milliseconds per pixel

	return ScoreHorizon;
});