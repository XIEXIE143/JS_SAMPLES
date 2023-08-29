
var rarities = [
    { type: "N", name: "Normal", probability: 70 },
    { type: "R", name: "Rare", probability: 20 },
    { type: "SR", name: "Super Rare", probability: 6 },
    { type: "SSR", name: "Super Special Rare", probability: 3 },
    { type: "LR", name: "Legend", probability: 1 },
];

function getRandomItem() {
    // 確率（Probability）の合計を計算 70 + 20 + 6 + 3 + 1 = 100
    var totalProbability = rarities.reduce(function(sum, rarity) {
        return sum + rarity.probability;
    }, 0);

    var randomValue = Math.random() * totalProbability;
    var cumulativeProbability = 0;

    for (var i = 0; i < rarities.length; i++) {
        cumulativeProbability += rarities[i].probability;
        if (randomValue < cumulativeProbability) {
            return rarities[i];
        }
    }
}

function showLotteryResult() {
    var selectedItem = getRandomItem();
    var resultElement = document.getElementById("result");
    resultElement.textContent = "結果：" + selectedItem.name + "（" + selectedItem.type + "）";
}

showLotteryResult();