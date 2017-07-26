function check(){
			let yearTxtBox = document.getElementById("year");
			let year = parseInt(yearTxtBox.value);
			let resultPar = document.getElementById("result");
			let gregRadio = document.getElementById("greg");
			let perBasicRadio = document.getElementById("per-basic");
			let perAdvancedRadio = document.getElementById("per-adv");
			let perCompRadio = document.getElementById("per-comp");
			let isLeapYear = false;
			if (gregRadio.checked)
				isLeapYear = greg(year);
			else if (perBasicRadio.checked)
				isLeapYear = persianBasic(year);
			else if (perAdvancedRadio.checked)
				isLeapYear = persianAdvanced(year);
			else if (perCompRadio.checked)
				isLeapYear = persianComputer(year);
			if (isLeapYear){
				resultPar.innerText = "Year " + year + " is a leap year";
			}
			else{
				resultPar.innerText = "Year " + year + " is not a leap year";
			}
			
}

function greg(year){
	if (year % 4 == 0 && year % 100 != 0)
		return true;
	if (year % 400 == 0)
		return true;
	return false;
}


function persianAdvanced(year){
	let s1 = (year + 2346) % 2820;
	let remainders = new Set([0, 5, 9, 13, 17, 21, 25, 29, 34, 38, 42, 46, 50, 54, 58, 62, 67, 71, 75, 79, 83, 87, 91, 95, 100, 104, 108, 112, 116, 120, 124]);
	if (s1 == 0)
	{
		return true;
	}
	else
	{
		let s2 = s1 % 128;
		if (remainders.has(s2))
			return true;
	}
	return false;
}


function persianComputer(year){
	let rem = (683 * (year + 2346)) % 2820;
	return rem < 683;
}


function persianBasic(year){
	let s1 = year % 33;
	let remainders = new Set([1, 5, 9, 13, 17, 22, 26, 30]);
	return remainders.has(s1);
}

function getNextLeapYear(){
	let year = new Date().getUTCFullYear();
	for (let tmp = year; tmp < year + 10; tmp++)
		if (greg(tmp)){
			return tmp;
		}
}
