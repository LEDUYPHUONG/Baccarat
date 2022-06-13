
function clickResetButton(e) {
    removeChooseOption();
    document.getElementById("alert_noBet").innerHTML = "Vui lòng đặt cược!";
    document.getElementById("alert_noBet").style.color = "green";
    document.getElementById("odds").innerHTML = "";
    document.getElementById("result_bet").innerHTML = "";
    document.getElementById("buttonWin").style.opacity = "0";
    document.getElementById("bet_button").style.opacity = "0";
    countClickBet = 0;
    countNumberWin = 0;
}


function clickBetBlu(e) {
    removeChooseOption()
    document.getElementById('blue_radio').checked = true;
    document.getElementById("alert_noBet").innerHTML = "Bạn đặt cược xanh Win?";
    document.getElementById("alert_noBet").style.color = "blue";
    document.getElementById("ButtonBetBlu").style.background = "lightblue";
    document.getElementById("ButtonBetBlu").style.border = "lightblue 1px solid";
    document.getElementById("ButtonBetBlu").style.boxShadow = "0px 0px 40px lightblue";
    document.getElementById("ButtonBetBlu").style.color = "blue";
    document.getElementById("buttonWin").style.opacity = "0";
    document.getElementById("bet_button").style.opacity = "1";

    
}

function clickBetRed(e) {
    removeChooseOption()
    document.getElementById('red_radio').checked = true;
    document.getElementById("alert_noBet").innerHTML = "Bạn đặt cược đỏ Win?";
    document.getElementById("alert_noBet").style.color = "red";
    document.getElementById("ButtonBetRed").style.background = "lightblue";
    document.getElementById("ButtonBetRed").style.border = "lightblue 1px solid";
    document.getElementById("ButtonBetRed").style.boxShadow = "0px 0px 40px lightblue";
    document.getElementById("ButtonBetRed").style.color = "red";
    document.getElementById("buttonWin").style.opacity = "0";
    document.getElementById("bet_button").style.opacity = "1";
}

function removeChooseOption() {
    document.getElementById("alert_noBet").innerHTML = "";
    document.getElementById('blue_radio').checked = false;
    document.getElementById('red_radio').checked = false;
    document.getElementById("ButtonBetBlu").style.background = "black";
    document.getElementById("ButtonBetBlu").style.boxShadow = "none";
    document.getElementById("ButtonBetBlu").style.color = "lightblue";
    document.getElementById("ButtonBetRed").style.background = "black";
    document.getElementById("ButtonBetRed").style.boxShadow = "none";
    document.getElementById("ButtonBetRed").style.color = "lightblue";
}

var countClickBet = 0;


function odds(e) {
    // odds: tỉ lệ cược
    // pet: cược
    var minpet = +document.getElementById("BetLevel").value;
    var petX1 = minpet * 1;
    var petX2 = petX1 * 2;
    var petX3 = petX2 * 2;
    var petX4 = petX3 * 2;
    var petX5 = petX4 * 2;
    var petX6 = petX5 * 2;

    countClickBet += 1;
    document.getElementById("alert_noBet").innerHTML = "Bạn đã đặt cược thành công!";
    if (countClickBet === 1) {
        document.getElementById("odds").innerHTML= "X1 = " + petX1 ;
        document.getElementById("buttonWin").style.opacity = "1";
        return;
    }
    if (countClickBet === 2) {
        document.getElementById("odds").innerHTML = "X2 = " + petX2 ;
        document.getElementById("buttonWin").style.opacity = "1";
        return;
    }
    if (countClickBet === 3) {
        document.getElementById("odds").innerHTML = "X3 = " + petX3 ;
        document.getElementById("buttonWin").style.opacity = "1";
        return;
    }
    if (countClickBet === 4) {
        document.getElementById("odds").innerHTML = "X4 = " + petX4 ;
        document.getElementById("buttonWin").style.opacity = "1";
        return;
    }
    if (countClickBet === 5) {
        document.getElementById("odds").innerHTML = "X5 = " + petX5 ;
        document.getElementById("buttonWin").style.opacity = "1";
        return;
    }
    if (countClickBet === 6) {
        document.getElementById("odds").innerHTML = "X6 = " + petX6 ;
        document.getElementById("buttonWin").style.opacity = "1";
        return;
    }
    if (countClickBet > 6) {
        document.getElementById("odds").innerHTML = "Bạn đã hết 1 dây, vui lòng đặt lại dây mới bằng cách bấm nút reset bên trên!";
        document.getElementById("buttonWin").style.opacity = "0";
        removeChooseOption();
        return;
    }
    
}

var countNumberWin = 0;
function countWin(e) {
    countNumberWin += 1;
        
    
    if (countNumberWin === 1) {
        document.getElementById("result_bet").innerHTML= "Win 1";
    }
    if (countNumberWin === 2) {
        document.getElementById("result_bet").innerHTML = "Win 2";
    }
    if (countNumberWin === 3) {
        document.getElementById("result_bet").innerHTML = "Win 3";
    }
    if (countNumberWin === 4) {
        document.getElementById("result_bet").innerHTML = "Win 4";
    }
    if (countNumberWin === 5) {
        document.getElementById("result_bet").innerHTML = "Win 5";
    }
    if (countNumberWin === 6) {
        document.getElementById("result_bet").innerHTML = "Win 6";
    }
    if (countNumberWin === 7) {
        document.getElementById("result_bet").innerHTML = "Win 7";
    }
    if (countNumberWin === 8) {
        document.getElementById("result_bet").innerHTML= "Win 8";
    }
    if (countNumberWin === 9) {
        document.getElementById("result_bet").innerHTML = "Win 9";
    }
    if (countNumberWin === 10) {
        document.getElementById("result_bet").innerHTML = "Win 10";
    }
    if (countNumberWin === 11) {
        document.getElementById("result_bet").innerHTML = "Win 11";
    }
    if (countNumberWin === 12) {
        document.getElementById("result_bet").innerHTML = "Win 12";
    }
    if (countNumberWin === 13) {
        document.getElementById("result_bet").innerHTML = "Win 13";
    }
    if (countNumberWin === 14) {
        document.getElementById("result_bet").innerHTML = "Win 14";
    }
    if (countNumberWin === 15) {
        document.getElementById("result_bet").innerHTML = "Win 15, bạn đã cược nhiều rồi, nên nghỉ thôi!";
        
    }

    countClickBet = 0;
    document.getElementById("bet_button").style.opacity = "0";
    document.getElementById("odds").innerHTML = "";
    document.getElementById("buttonWin").style.opacity = "0";
    removeChooseOption();
    document.getElementById("alert_noBet").innerHTML = "Chúc mừng bạn đã Win!";
    if (countNumberWin > 15) {
        document.getElementById("result_bet").innerHTML = "Hông cho cược nữa! Nghỉ đếm win rồi nha, bấm reset đi!";

        
    }
}
