/**************************************************************************** */
/****************************************************** [ global ] ********** */
let range;
let length;

/**************************************************************************** */
/****************************************************** [ shuffle ] ********** */
function shuffle(range) {
	let result = [];
	let n = range.length;
	let i;
	while (n) {
		i = Math.floor(Math.random() * range.length);
		if (i in range) {
			result.push(range[i]);
			delete range[i];
			n--;
		}
	}
	return result;
}
/**************************************************************************** */

/**************************************************************************** */
/**************************************************** [ Generator ] ********** */
function generator(start, end)
{
	length = end - start;
	range = Array(length);
	for (let i = 0; i <= length; i++)
		range[i] = start++;
	console.log(range);
	let shuffled = shuffle(range);
	console.log(shuffled);
}
/**************************************************************************** */
/******************************************* [ Manual Generation ] ********** */
let startInput = document.getElementById("start");
let endInput = document.getElementById("end");
let manualBtn = document.querySelector(".btn_gen_manual")
manualBtn.addEventListener("click", m_gen);
function m_gen()
{
	if(startInput.value && endInput.value)
	{
		let start = Number(startInput.value);
		let end = Number(endInput.value);
		if (start < end)
		{
			generator(start, end);
			startInput.value = "";
			endInput.value = "";
		}
		else if (start == end)
			alert("( -_- ), You Are Crazy!!");
		else
			alert("\"start\" < \"end\", Please use your brain !!");
	}
	else
		alert("\"start\" or \"end\" Missing");
}
/**************************************************************************** */

/**************************************************************************** */
/********************************************* [ Auto Generation ] ********** */
let howMany = document.getElementById("howMany");
let autoBtn = document.querySelector(".btn_gen_auto");
autoBtn.addEventListener("click", a_gen);
function a_gen()
{
	if(Number(howMany.value) > 0)
	{
		let start = Math.floor(-Number(howMany.value)/2);
		let end = Math.floor(+Number(howMany.value)/2);
		console.log(start);
		console.log(end);
		generator(start, end)
		howMany.value = "";
	}
	else
		alert("Sorry, But You Are Not Reasonable At All!");
}
/**************************************************************************** */

/**************************************************************************** */
/********************************************* [ Display Numbers ] ********** */

/**************************************************************************** */