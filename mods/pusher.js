elements.up_pusher = {
	color: "#ffffff",
	properties: {
		range: 1,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 1;
		pixel.pushStrength ??= 1;

		for(h = 0; h < pixel.pushStrength; h++) {
			for(i=(pixel.range - 1); i>=0; i--) {
				if (!isEmpty(pixel.x,pixel.y-1-i,true)) {
					tryMove(pixelMap[pixel.x][pixel.y-1-i],pixel.x,pixel.y-2-i);
				};
			};
		};
		
		doDefaults(pixel);
	},
	category: "machines",
	breakInto: ["metal_scrap", "steel", "iron", "glass", "uranium", "tin"],
	tempHigh: 2400,
	stateHigh: ["molten_aluminum", "molten_steel", "molten_iron", "molten_glass", "molten_uranium", "molten_tin"],
	density: 10000,
	hardness: 1,
	conduct: 1,
	state: "solid",
}

elements.down_pusher = {
	color: "#ffffff",
	properties: {
		range: 1,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 1;
		pixel.pushStrength ??= 1;

			for(h = 0; h < pixel.pushStrength; h++) {
				for(i=(pixel.range - 1); i>=0; i--) {
					if (!isEmpty(pixel.x,pixel.y+1+i,true)) {
						tryMove(pixelMap[pixel.x][pixel.y+1+i],pixel.x,pixel.y+2+i);
					};
				};
			};

		doDefaults(pixel);
	},
	category: "machines",
	breakInto: ["metal_scrap", "steel", "iron", "glass", "uranium", "tin"],
	tempHigh: 2400,
	stateHigh: ["molten_aluminum0", "molten_steel", "molten_iron", "molten_glass", "molten_uranium", "molten_tin"],
	density: 10000,
	hardness: 1,
	conduct: 1,
	state: "solid",
}

elements.left_pusher = {
	color: "#9fafdf",
	properties: {
		range: 1,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 1;
		pixel.pushStrength ??= 1;

		for(h = 0; h < pixel.pushStrength; h++) {
			for(i=(pixel.range - 1); i>=0; i--) {
				if (!isEmpty(pixel.x-1-i,pixel.y,true)) {
					tryMove(pixelMap[pixel.x-1-i][pixel.y],pixel.x-2-i,pixel.y);
				};
			};
		};

		doDefaults(pixel);
	},
	category: "machines",
	breakInto: ["metal_scrap", "steel", "iron", "glass", "uranium", "tin"],
	tempHigh: 2400,
	stateHigh: ["molten_aluminum", "molten_steel", "molten_iron", "molten_glass", "molten_uranium", "molten_tin"],
	density: 10000,
	hardness: 1,
	conduct: 1,
	state: "solid",
}

elements.right_pusher = {
	color: "#9fafdf",
	properties: {
		range: 1,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 1;
		pixel.pushStrength ??= 1;

		for(h = 0; h < pixel.pushStrength; h++) {
			for(i=(pixel.range - 1); i>=0; i--) {
				if (!isEmpty(pixel.x+1+i,pixel.y,true)) {
					tryMove(pixelMap[pixel.x+1+i][pixel.y],pixel.x+2+i,pixel.y);
				};
			};
		};

		doDefaults(pixel);
	},
	category: "machines",
	breakInto: ["metal_scrap", "steel", "iron", "glass", "uranium", "tin"],
	tempHigh: 2400,
	stateHigh: ["molten_aluminum", "molten_steel", "molten_iron", "molten_glass", "molten_uranium", "molten_tin"],
	density: 10000,
	hardness: 1,
	conduct: 1,
	state: "solid",
}

