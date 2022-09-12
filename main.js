// Manual Generation

let start = document.getElementById("start");
let end = document.getElementById("end");
let manualBtn = document.querySelector(".btn_gen_manual")

manualBtn.addEventListener("click", m_gen);
function m_gen()
{
	if(start.value && end.value)
	{
		if (start.value < end.value)
		{
			console.log(start.value);
			console.log(end.value);
		}
		else if (start.value == end.value)
		{
			alert("( -_- ), crazy man");
		}
		else
			alert("\"start\" < \"end\", Please use your brain !!");
	}
	else
		alert("\"start\" or \"end\" Missing");
	// console.log("osama");
}