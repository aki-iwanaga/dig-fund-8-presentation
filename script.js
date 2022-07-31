// 2秒ごとに アライグマ の絵文字を追加します
// let addRaccoon = () => {
//     let theRaccoonMeter = document.getElementById("raccoonMeter");
//     theRaccoonMeter.append("🦝");
//   };
//   window.addEventListener("load", () => {
//     window.setInterval(addRaccoon, 2000);
//   });

function outputGators() {
    let num = document.getElementById("numberInput").value;
    console.log(num);
    let element = document.getElementById("blueBox");
    for (let i = 1; i <= num; i++){
    element.textContent += "🐊"
    }
}
