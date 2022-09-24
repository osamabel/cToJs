/**************************************************************************** */
/****************************************************** [ global ] ********** */
let range;
let length;
let shuffled;

/**************************************************************************** */
/****************************************************** [ shuffle ] ********** */
function shuffle(range) {
	let n = length;
	let result = [];
	let i;
	while (n) {
		i = Math.floor(Math.random() * range.length);
		if (i in range) {
			result.push(range[i]);
			A.push(range[i]);
			delete range[i];
			n--;
		}
	}
	return result;
}
/**************************************************************************** */

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
			length = end - start;
			range = Array(length);
			shuffled = Array(length);
			for (let i = 0; i <= length; i++)
			range[i] = start++;
			shuffled = shuffle(range);
			startInput.value = "";
			endInput.value = "";
			minIndex = A.list.indexOf(Math.min(...A.list));
			display();
			mySortAlgorithm();
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
		let n = Number(howMany.value);
		length = n;
		let i = 0;
		let rund = [-100000, -10000, -1000, -100, -10, 0, 10, 100, 1000, 10000, 100000];
		shuffled = Array(length);
		while (n) {
			let holder = Math.floor(Math.random() * rund[Math.floor(Math.random() * 10)]);
			if (!shuffled.includes(holder))
			{
				shuffled[i] = holder
				A.push(shuffled[i++]);
				n--;
			}
		}
		howMany.value = "";
		minIndex = A.list.indexOf(Math.min(...A.list));
		display();
		mySortAlgorithm();
	}
	else
		alert("Sorry, But You Are Not Reasonable At All!");
	}
/**************************************************************************** */

/**************************************************************************** */
/********************************************* [ Display Numbers ] ********** */
function display()
{
	let displayerContainer = document.querySelector(".suffled");
	let displayer = document.getElementById("displayer");
	let elm;
	displayerContainer.classList.remove("hide");
	let i = 0;
	let interval = setInterval(() => {
		elm = document.createElement("li");
		elm.textContent = shuffled[i];
		displayer.appendChild(elm);
		i++;
		if (i ==length)
			clearInterval(interval);
	}, 30);
}
/**************************************************************************** */