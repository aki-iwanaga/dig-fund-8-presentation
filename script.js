'use strict'

function winCheckAll() {
    // インプット情報の取得
    const winningGroup1 = document.getElementById("winningGroup1").value;
    const winningGroup21 = document.getElementById("winningGroup21").value;
    const winningGroup22 = document.getElementById("winningGroup22").value;
    const winningGroup3 = document.getElementById("winningGroup3").value;

    const winningNumber1 = document.getElementById("winningNumber1").value;
    const winningNumber21 = document.getElementById("winningNumber21").value;
    const winningNumber22 = document.getElementById("winningNumber22").value;
    const winningNumber3 = document.getElementById("winningNumber3").value;

    const myGroup = document.getElementById("myGroup").value;
    const myNumber = document.getElementById("myNumber").value;

    const myGroupCheck = document.getElementById("myGroupCheck").value;
    const myNumberCheck = document.getElementById("myNumberCheck").value;

    //前後賞番号の取得
    const winningNumber1Before = (winningNumber1 - 1).toString();
    const winningNumber1After =  (Number(winningNumber1) + 1).toString();

    //所持券の組と番号をくっつける
    const mySet = myGroup + myNumber;

    //結果メッセージ用の変数定義
    let gradeResult = "全部";
    let mainResult = "はずれ..";
    let subResult = "でもしらべてくれて、ありがとう！";

    // メッセージ初期化
    gradeMessage.textContent = "当たるかな？？";
    subMessage.textContent = "けっかは ↑ に出るよ";

    //エラーメッセージ
    //ただし2等以下の当せん番号入力エラーは、プレゼン用に割愛
    if (winningGroup1 === "" || winningNumber1 === "") {
        return alert("当せん番ごうを入力してね");
    }
    if (myGroup === "" || myNumber === "") {
        return alert("持ってる番ごうを入力してね");
    }
    if (winningGroup1.length !== 2 || myGroup.length !== 2) {
        return alert("組は２けたの数字だよ");
    }
    if (winningNumber1.length !== 6 || myNumber.length !== 6) {
        return alert("番ごうは６けたの数字だよ");
    }
    if (myGroup !== myGroupCheck || myNumber !== myNumberCheck) {
        return alert("持ってる番ごうの入力がまちがってるよ");
    }

    //組・番両方見て、何か所当たっているかをカウントする関数
    function winSetCheck (winningGroup, winningNumber) {
        const winningSet = winningGroup + winningNumber;
        let count = 0;
        for (let i = 0; i < 8; i++) {
            if (winningSet[i] === mySet[i]) {
                count++;
            }
        }
        return count;
    }
    //組下一桁と番号を見て何か所当たっているかをカウントする関数（３等専用）
    function win3Check (winningGroup, winningNumber) {
        const winningSet = winningGroup + winningNumber;
        let count = 0;
        for (let i = 0; i < 7; i++) {
            if (winningSet[i] === mySet[i + 1]) {
                count++;
            }
        }
        return count;
    }

    //番号だけ見て何か所当たってるかをカウントする関数
    function winNumberCheck (winningNumber) {
        let count = 0;
        for (let i = 0; i < 6; i++) {
            if (winningNumber[i] === myNumber[i]) {
                count++;
            }
        }
        return count;
    }

    //惜しい判定
    //組違い惜しい
    if (winNumberCheck(winningNumber1) === 5) {
        gradeResult = "１とう組ちがい";
        mainResult = "おしい!";
        subResult = "あと数字１つで当たってたよ!"
    }
    //３等おしい
    if (win3Check(winningGroup3, winningNumber3) === 6) {
        gradeResult = "３とう";
        mainResult = "おしい!";
        subResult = "あと数字１つで当たってたよ!"
    }
    //２等おしい
    if (winSetCheck(winningGroup21, winningNumber21) === 7) {
        gradeResult = "２とう";
        mainResult = "おしい!";
        subResult = "あと数字１つで当たってたよ!"
    }
    if (winSetCheck(winningGroup22, winningNumber22) === 7) {
        gradeResult = "２とう";
        mainResult = "おしい!";
        subResult = "あと数字１つで当たってたよ!"
    }
    //前後賞おしい
    if (winSetCheck(winningGroup1, winningNumber1Before) === 7) {
        gradeResult = "１とう前後しょう";
        mainResult = "おしい!";
        subResult = "あと数字１つで当たってたよ!"
    }
    if (winSetCheck(winningGroup1, winningNumber1After) === 7) {
        gradeResult = "１とう前後しょう";
        mainResult = "おしい!";
        subResult = "あと数字１つで当たってたよ!"
    }
    //１等おしい
    if (winSetCheck(winningGroup1, winningNumber1) === 7) {
        gradeResult = "１とう";
        mainResult = "おしい!";
        subResult = "あと数字１つで当たってたよ!"
    }

    //当たり判定
    //組違い当たり
    if (winNumberCheck(winningNumber1) === 6) {
        gradeResult = "１とう組ちがい";
        mainResult = "当たり!";
        subResult = "いそいでお父さんをよぼう!"
    }
    //３等当たり
    if (win3Check(winningGroup3, winningNumber3) === 7) {
        gradeResult = "３とう";
        mainResult = "当たり!";
        subResult = "いそいでお父さんをよぼう!"
    } 
    //２等当たり
    if (winSetCheck(winningGroup21, winningNumber21) === 8) {
        gradeResult = "２とう";
        mainResult = "当たり!";
        subResult = "いそいでお父さんをよぼう!"
    } 
    if (winSetCheck(winningGroup22, winningNumber22) === 8) {
        gradeResult = "２とう";
        mainResult = "当たり!";
        subResult = "いそいでお父さんをよぼう!"
    } 
    //前後賞当たり
    if (winSetCheck(winningGroup1, winningNumber1Before) === 8) {
        gradeResult = "１とう前後しょう";
        mainResult = "当たり!";
        subResult = "いそいでお父さんをよぼう!"
    } 
    if (winSetCheck(winningGroup1, winningNumber1After) === 8) {
        gradeResult = "１とう前後しょう";
        mainResult = "当たり!";
        subResult = "いそいでお父さんをよぼう!"
    } 
    //１等あたり
    if (winSetCheck(winningGroup1, winningNumber1) === 8) {
        gradeResult = "１とう";
        mainResult = "当たり!";
        subResult = "いそいでお父さんをよぼう!"
    } 


    // カウントダウンと結果表示
    mainMessage.style.visibility = "visible";
    mainMessage.textContent = "３";
    setTimeout(function () {
        mainMessage.textContent = "２";
    }, 1000);
    setTimeout(function () {
        mainMessage.textContent = "１";
    }, 2000);
    setTimeout(function () {
        gradeMessage.textContent = gradeResult;
        mainMessage.textContent = mainResult;
        subMessage.textContent = subResult;
    }, 3000);

}

