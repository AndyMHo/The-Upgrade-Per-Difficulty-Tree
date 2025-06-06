let modInfo = {
	name: "The Upgrade Per Difficulty Tree",
	author: "AndyMHo at Github",
	pointsName: "difficulty power",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0.2",
	name: "Excavation Time",
}

let changelog = `<h1>Changelog:</h1><br>
 <h2>v0.0 - Literally nothing</h2><br>
 - Added nothing at all, there is still the green prestige layer though.<br>
 - Changed the mod info, that's it lol<br>
 - Added The First Difficulty<br>
 <h3>v0.0.1 - Bit and Piece</h3><br>
 - Beautified the upgrades<br>
 - Finished Class -1 Baseline<br>
 - There's music now :D Toggle it in options<br>
 <h3>v0.0.2 - Excavation Time</h3><br>
 - Cash`

let winText = `Congratulations! You have broken reality by buying the hardest difficulty and have beaten this game, for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return hasUpgrade("u",11)
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade("u",12))
	 gain = gain.mul(upgradeEffect("u",12))
	if (hasUpgrade("u",13))
	 gain = gain.mul(new Decimal(1.5))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}