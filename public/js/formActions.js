;

let info = document.querySelector('.info');
let info_b = document.querySelector('.info__box');
let info_h = document.querySelector('.info__box__header');
let info_c = document.querySelector('.info__box__content');

function c3p10()
{
		

	let form = document.forms.c3p10;
	let input = form.elements.UTX;

	if(input[0].checked)
	{
		correct("Even though your wallet will show a balance of 150 bitcoins, you still have 3 UTXOs of 50 bitcoins each. This is similar to how if you have three $50 notes, then your balance will still be $150 but that doesn't mean that you have a single $150 note. As with real life, there can be various UTXO denominations that add up to the same amount.");
	}
	else
	{
		incorrect("Even though your wallet will show a balance of 150 bitcoins, you still have 3 UTXOs of 50 bitcoins each. This is similar to how if you have three $50 notes, then your balance will still be $150 but that doesn't mean that you have a single $150 note. As with real life, there can be various UTXO denominations that add up to the same amount.");
	}
}

function correct(c)
{
	info.style.display = "block";
	info_b.classList.add('correct');
	info_b.classList.remove('incorrect');
	info_h.innerHTML = "Correct!";

	info_c.innerHTML = c;
}

function incorrect(c)
{
	info.style.display = "block";
	info_b.classList.add('incorrect');
	info_b.classList.remove('correct');
	info_h.innerHTML = "Sorry!";

	info_c.innerHTML = c;
}


export default function forms(c,p)
{
	if(c==3 && p==10)
		setTimeout(function(){document.forms.c3p10.addEventListener('submit', c3p10)},1000);
}