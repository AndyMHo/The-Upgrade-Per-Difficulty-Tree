addLayer("u", {
    name: "Class -1", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "-1", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		       points: new Decimal(0),
        cash: new Decimal(0),
        existenceLevel: "-Ω"
    }},
    color: "#7F7FFF",
    requires: new Decimal(Infinity), // Can be a function that takes requirement increases into account
    resource: "unlosables", // Name of prestige currency
    baseResource: "difficulty power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "u", description: "U: Buy available Class -1 upgrades", 
            onPress() {
                buyUpgrade(this.layer,11)
                buyUpgrade(this.layer,12)
                buyUpgrade(this.layer,13)
            }
        },
    ],
    upgrades: {
        11: {
            title: "The First Difficulty",
            description: "Start generating difficulty power",
            fullDisplay() {
                return '<h3>'+this.title+'</h3><br>'+
                this.description+'<br><br>Cost: 0 '+
                this.currencyDisplayName
            },
            onPurchase() {
                player[this.layer].points = (player[this.layer].points).add(new Decimal(1))
            },
            style : {
                "text-shadow" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
                "background-image" : "url(https://static.wikia.nocookie.net/jtohs-joke-towers/images/5/51/Tfird.png)",
                "background-blend-mode" : "luminosity",
                "background-size" : "100%"
            },
            currencyDisplayName: "difficulty power",
            canAfford() {return (player.points).gte(new Decimal(0))},
            pay() {player.points = (player.points).sub(new Decimal(0))}
        },
        12: {
            title: "The Lower Gap",
            description: "Difficulty power is boosted by the amount of difficulties unlocked",
            effect() {return (player.u.points).sqrt()},
            fullDisplay() {
                return '<h3>'+this.title+'</h3><br>'+
                this.description+'<br>Currently: '+format(this.effect())+
                'x<br><br>Cost: 10 '+this.currencyDisplayName
            },
            onPurchase() {
                player[this.layer].points = (player[this.layer].points).add(new Decimal(1))
            },
            style : {
                "text-shadow" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
                "background-image" : "url(https://static.wikia.nocookie.net/jtohs-joke-towers/images/4/47/TheLowerGapRemake.png)",
                "background-blend-mode" : "luminosity",
                "background-size" : "100%"
            },
            currencyDisplayName: "difficulty power",
            canAfford() {return (player.points).gte(new Decimal(10))},
            pay() {player.points = (player.points).sub(new Decimal(10))}
        },
        13: {
            title: "Negativity",
            description: "Boost difficulty power gain by 1.5, also unlocks the Pre-Excavation chain",
            effect() {return (player.u.points).sqrt()},
            fullDisplay() {
                return '<h3>'+this.title+'</h3><br>'+
                this.description+'<br>Currently: '+format(this.effect())+
                'x<br><br>Cost: 25 '+this.currencyDisplayName
            },
            onPurchase() {
                player[this.layer].points = (player[this.layer].points).add(new Decimal(1))
            },
            style : {
                "text-shadow" : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
                "background-image" : "url(https://static.wikia.nocookie.net/jtohs-joke-towers/images/9/90/Negativity.png)",
                "background-blend-mode" : "luminosity",
                "background-size" : "100%"
            },
            currencyDisplayName: "difficulty power",
            canAfford() {return (player.points).gte(new Decimal(25))},
            pay() {player.points = (player.points).sub(new Decimal(25))}
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        "upgrades",
        ["raw-html", function() {return options.musicToggle ? '<audio controls loop hidden autoplay><source src="music/all8BitNow.mp3"/></audio>' : ""}]
    ],
    layerShown(){return true}
})