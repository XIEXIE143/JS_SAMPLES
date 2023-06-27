var hp;

hp = 4

hp = hp + 5
console.log(hp)

hp = hp - 1
console.log(hp)

hp = hp * 2
console.log(hp)

hp = hp / 3
console.log(hp)

console.log("--- unary operation --")
hp = 5
hp++
console.log(hp)

hp = 5
hp--
console.log(hp)

console.log("--- compound operation --")
hp = 5
hp += 3
console.log(hp)

hp = 5
hp -= 3
console.log(hp)

hp = 10

var monster_name = "スライム"
var message = monster_name + "があらわれた！"
console.log(message)

message = monster_name + "のHPは" + hp
console.log(message)

var isTrue;

hp = 10;
isBool = (hp == 20)
console.log(isBool)

hp = 0;
isBool = (hp < 0)
console.log(isBool)

hp = 0;
isBool = (hp >= 10)
console.log(isBool)

hp = 15;
isBool = (hp >= 10)
console.log(isBool)

console.log("----ternary operation---")
hp = 10
var result = (hp <= 20) ? "ピンチ！" : "大丈夫";
console.log("HP:" + hp)
console.log(result)