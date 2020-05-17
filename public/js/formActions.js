let info=document.querySelector('.info');
let info_b=document.querySelector('.info__box');
let info_h=document.querySelector('.info__box__header');
let info_c=document.querySelector('.info__box__content');

let USD=0, c2= {
	p9: 'L1iMKhj542xS6obWwQYPNUZrm6QazvdBYH9hEKEDuT7U3yrDmBaU',
	p11: '0230ffe4d064a572736a695c3e8810442470cb178bcece2cf2cbc607a49dc54611',
	p19: '1PMepqmJBqRLsLYauENmmX141jngRVwMsw'
};

function c3p10() {

	let form=document.forms.c3p10;
	let input=form.elements.UTX;

	if(input[0].checked)
		_info('correct', 'Even though your wallet will show a balance of 150 bitcoins, you still have 3 UTXOs of 50 bitcoins each. This is similar to how if you have three $50 notes, then your balance will still be $150 but that doesn\'t mean that you have a single $150 note. As with real life, there can be various UTXO denominations that add up to the same amount.');
	else
		_info('sorry', 'Even though your wallet will show a balance of 150 bitcoins, you still have 3 UTXOs of 50 bitcoins each. This is similar to how if you have three $50 notes, then your balance will still be $150 but that doesn\'t mean that you have a single $150 note. As with real life, there can be various UTXO denominations that add up to the same amount.');
}

function c2p8(e) {
	console.log('in c2p8');
	e.preventDefault();

	$.ajax({
		type: 'POST',
		url: '/functions/c2p8',
		dataType: 'json',
	})
	.done(res=> {
		const {address, privateKey, publicKey} = res;
		c2.p9=privateKey;
		c2.p11=publicKey;
		c2.p19=address;
	})
	.fail(err=> {
		c2.p9=c2.p11=c2.p19='error';
	})
}

function c5(e) {
	console.log('in c5');
	e.preventDefault();

	let data= {
		text: $('input[name=name]').val() || $('textarea[name=name]').val()
	};

	$.ajax({
		type: 'POST',
		url: '/functions/c5',
		data: data,
		dataType: 'json',
	})
	.done(res=> {
		const {hash} = res;
		document.querySelector('input.c5').value=hash;
	})
	.fail(err=> {
		document.querySelector('input.c5').value='error';
	})
}

function c8(ref) {
	let data=null;

	$.ajax({
		type: 'POST',
		url: '/functions/c8',
		dataType: 'json'
	})
	.done(res=> {
		USD=res.price;
		if(ref == 'c810')
			document.querySelector('input.c810').value=USD*50;
		else
			document.querySelector('input.c811').value=USD*6000;
	})
}

export function _info(head, msg) {
	info.style.display="block";

	info_b.classList.remove('incorrect');
	info_b.classList.remove('correct');
	info_b.classList.remove('information');

	if(head=='sorry') info_b.classList.add('incorrect');
	else if(head=='correct') info_b.classList.add('correct');
	else info_b.classList.add('information');

	info_h.innerHTML=`${head}!`;
	info_c.innerHTML=msg;
}

export default function forms(c, p) {

	if(c==3 && p==10) 
		setTimeout(function() {document.forms.c3p10.addEventListener('submit', c3p10)}, 600);

	else if(c==2 && p==8) setTimeout(function() {document.forms.c2p8.addEventListener('submit', c2p8, event)}, 600);

	else if(c==2 && p==9) setTimeout(function() {document.querySelector('.c2p9').value=c2.p9 || ''}, 600);

	else if(c==2 && p==11) setTimeout(function() {document.querySelector('.c2p11').value=c2.p11 || ''}, 600);

	else if(c==2 && p==19) setTimeout(function() {document.querySelector('.c2p19').value=c2.p19 || ''}, 600);

	else if(c==5 && p==9) setTimeout(function() {document.forms.c5.addEventListener('submit', c5, event)}, 600);

	else if(c==5 && p==11) setTimeout(function() {document.forms.c5.addEventListener('submit', c5, event)}, 600);
	
	else if(c==8 && p==10) setTimeout(c8, 600, 'c810');

	else if(c==8 && p==11) setTimeout(c8, 600, 'c811');
}