var stage = document.getElementById("stage")

// pタグの作成
var monsterElement1 = document.createElement("p")
// タグの中に文字をいれる
monsterElement1.innerHTML = "ゴースト"
// parent elment(stage)に child element(monsterElement1)を追加
stage.appendChild(monsterElement1)

var monsterElement2 = document.createElement("p")
monsterElement2.innerHTML = "キメラ"
stage.appendChild(monsterElement2)

//stageから、monsterElement1を削除（さくじょ）
stage.removeChild(monsterElement1)

//aタグ作成
var a = document.createElement("a")
a.href = "https://www.google.com/search?q=" + monsterElement1.innerHTML
a.target = "_blank"
a.innerHTML = monsterElement1.innerHTML
stage.appendChild(a)

//monster-list
var monsterList = document.getElementById("monster-list")

function createMonster(name, imageName) {
    var div = document.createElement("div")
    var p = document.createElement("p")
    var img = document.createElement("img")

    //モンスターの名前
    p.innerHTML = name
    //モンスターの画像
    img.src = "images/" + imageName
    //divに追加
    div.appendChild(p)
    div.appendChild(img)
    // div.setAttribute("class", "col-4")
    // div.className = "col-4"
    div.classList = ["col-4"]

    //monsterListに追加
    monsterList.appendChild(div)
}

createMonster("モンスター1", "monster_006.png")
createMonster("モンスター2", "monster_022.png")
createMonster("モンスター3", "monster_040.png")

createMonster("モンスター1", "monster_006.png")
createMonster("モンスター2", "monster_022.png")
createMonster("モンスター3", "monster_040.png")

createMonster("モンスター1", "monster_006.png")
createMonster("モンスター2", "monster_022.png")
createMonster("モンスター3", "monster_040.png")