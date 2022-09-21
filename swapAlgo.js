/*
	1. Extract from "shuffled" array the largest_increasing_sequence, and put it in another array.
	2. Transfer all other number to STACK_B those don't belong to largest_increasing_sequence.
	3. Find the best number in STACK_B, send it to STACK_A.
	4. Order STACK_A.
*/


/******************************************************************************/
/******************************************************** [ ClassParent ] *** */
/******************************************************************************/
class myStack
{
	constructor()
	{
		this.list = [];
		this.head = -1;
	}
	push(elm)
	{
		this.list.push(elm);
		this.head++;
	}
	unshift(elm)
	{
		this.list.unshift(elm);
		this.head++;
	}
	pop()
	{
		this.head--;
		return (this.list.pop());
	}
	shift()
	{
		this.head--;
		return (this.list.shift());
	}
	swap()
	{
		if (this.head >= 1)
		{
			let holder = this.list[this.head];
			this.list[this.head] = this.list[this.head - 1];
			this.list[this.head - 1] = holder;
		}
	}
	rotate()
	{
		if (this.head == 1)
		this.swap();
		else (this.head > 1)
		{
			let holder = this.list[0];
			for(let i = 0; i < this.head; i++)
			this.list[i] = this.list[i + 1];
			this.list[this.head] = holder;
		}
	}
	rotateReverce()
	{
		if (this.head == 1)
			this.swap();
		else (this.head > 1)
		{
			let holder = this.list[this.head];
			for(let i = this.head; i > 0; i--)
			this.list[i] = this.list[i - 1];
			this.list[0] = holder;
		}
	}

}


/******************************************************************************/
/******************************************************** [ Inheritanse ] *** */
/******************************************************************************/
class Stack_A extends myStack{}
class Stack_B extends myStack{}


/******************************************************************************/
/********************************************************** [ Instances ] *** */
/******************************************************************************/
var A = new Stack_A();
var B = new Stack_B();


/******************************************************************************/
/********************************************************* [ PushFromTo ] *** */
/******************************************************************************/
function push_A()
{
	A.push(B.pop());
}
function push_B()
{
	B.push(A.pop());
}


/******************************************************************************/
/**************************************** [ largest increasing sequence ] *** */
/******************************************************************************/

/*
(1) - transfer MIN of Stack to buttom                                         */
let minIndex;

function transferMinToButtom()
{
	if (minIndex >= A.list.length / 2)
	{
		while (A.list.length > minIndex)
			B.push(A.pop());
		while (B.list.length)
			A.unshift( B.shift());
		minIndex = 0;
	}
	else
	{
		while (minIndex > 0)
		{
			B.push(A.shift());
			minIndex--;
		}
		while (B.list.length)
			A.push(B.shift());
	}
}