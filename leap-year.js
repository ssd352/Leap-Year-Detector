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


function persianBasic(year){
	let s1 = year % 33;
	let remainders = new Set([1, 5, 9, 13, 17, 22, 26, 30]);
	return remainders.has(s1);
}