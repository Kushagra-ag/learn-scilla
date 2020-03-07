;import { table1, table2, table3 } from './table.js';

export const captions = [[
	'Published on October 31, 2008',
	'Blockchain',
	'Zilliqa',
	'Blockchain',
	],[
	'ENIGMA: USED IN WORLD WAR II',
	'ENIGMA: USED IN WORLD WAR II',
	'Cryptography',
	'Cryptography',
	'WHITEFILED DIFFIE and MARTIN HELLMAN',
	'WHITEFILED DIFFIE and MARTIN HELLMAN',
	'Public Key and Private Key',
	'Private Key',
	'Github Code',
	'Public Key',
	'Github Code',
	'',
	'',
	'',
	'',
	'',
	'Wallet Address',
	'Wallet Address',
	'Github code',
	'Blockchain',
    ],[
    'Blockchain'
    ],[
    'Wallet'
    ],[
    ],[
    ],[
    ],[
    ],[
    ],[
    ]]


export const chapter1 = 
{
	page1:
	{
		title: 'CHAPTER 1: INTRODUCTION',
		head: `On 31st Oct 2008, a mysterious figure Satoshi Nakamoto published the Bitcoin white paper.`,
		body: ''
	},
	page2:
	{
		title: '',
		head: '',
		body: `The technology behind bitcoin is now popularly called <strong>Blockchain.</strong>`
	},
	page3:
	{
		title: '',
		head: '',
		body: `While the modern day blockchain platforms (such as our own <strong>Zilliqa!</strong>) have further built upon the original concept, <strong>Bitcoin's blockchain</strong> still remains a great starting point to learn about <strong>how the blockchain technology works</strong>`
	},
	page4:
	{
		title: '',
		head: `<div class='text-center'>So, let's start learning!</div>`,
		body: `<center><div class='mt-5 card__footer next page__control__elem' data-dir='down'>next</div></center>`
	},

};

export const chapter2 = 
{
	page1:
	{
		title: 'CHAPTER 2: PRIVATE KEY AND WALLET ADDRESS',
		head: 'Symmetric encryption',
		body: `<br>Before the mid 1970s, a single key was used to encrypt as well as decrypt a message. This often meant that the sender and the receiver of the message had to possess the same key­ this of course created the question about how could the sender and receiver share the secret key with each other without it being intercepted.`
	},
	page2:
	{
		title: '',
		head: "For example, the infamous Enigma machine that was used during the World War II used symmetric encryption",
		body: ``
	},
	page3:
	{
		title: '',
		head: 'Asymmetric encryption',
		body: `In the early 1970s, few mathematicians and cryptographers came up with the concept of asymmetric encryption or the public key encryption.<br>
				Here, the encryption was done by one key, the public key, which as the name implies could be shared publicly.`
	},
	page4:
	{
		title: '',
		head: 'Asymmetric encryption',
		body: `Anybody who wanted to send a private message to the owner of the public key will encrypt the message using the public key.<br><br>
		However, only the owner of the public key will happen to possess the private key (which as the name implies should be kept private) 
		and will be able to use it to decrypt the message`
	},
	page5:
	{
		title: '',
		head: 'Fun Trivia',
		body: `Till 1992, cryptography was on the U.S. Munitions List as an Auxiliary Military Equipment. Such an attitude was common among the governments and because of that the first known discovery of asymmetric encryption by 
		UK Government Communications Headquarters (GCHQ), wasn't publicly acknowled till 1997, which was about 27 years after the discovery.`
	},
	page6:
	{
		title: '',
		head: 'Fun Trivia',
		body: `Eventually , two cybersecurity innovators <strong>Whitfield Difie and Martin hellman</strong>, who (independently from their UK counterparts) discovered assymetric encryption made the research public
		despite multiple clashes with NSA (National Security Agency, United States) and despite threats of jail time. They won 2015 A.M. Turing Award`
	},
	page7:
	{
		title: '',
		head: '',
		body: `Now, to understand the asymmetric encryption, that involves a public and a private key for encrypting and decrypting a message, let's start with the concept of private key.`
	},
	page8:
	{
		title: '',
		head: 'Private key',
		body: `A private key is essentially a randomly generated number between 1 and 2^256.<br>
				While any method can be used to pick this random number, it’s recommended that one uses a cryptographically secure pseudorandom number generator (CSPRNG) with a seed from a source of sufficient entropy.
				<div class='mt-3 card__footer'>Generate a random private key</div>`
	},
	page9:
	{
		title: '',
		head: `<span class="mx-2" >Your random private key</span>`,
		body: `<input class="mb-3 mx-2 input">`
	},
	page10:
	{
		title: '',
		head: 'Public key',
		body: `Once the random private key is selected, the corresponding public key can be calculated. <br>However, no method is currently known that allows one to calculate the private key from the public key.<br>
		<div class='card__footer mt-4'>Calculate the public key</div>`
	},
	page11:
	{
		title: '',
		head: `<span class="mx-2" >Public key calculated</span>`,
		body: `<input class="mb-3 mx-2 input">`
	},
	page12:
	{
		title: '',
		head: '',
		body: `Now, let's take an example of how this works.<br>
		Suppose, you distribute the <strong>public key</strong> created above so that anybody
		who wants to contact you <strong>can encrypt the message with that key.</strong>`
	},
	page13:
	{
		title: '',
		head: '',
		body: ``
	},
	page14:
	{
		title: '',
		head: '',
		body: `<br>Now, suppose Alice has a message for you.<br>
		she wants to ensure that only you can access the message's content.<br>
		She encrypts the message using your public key and broadcasts it.<br><br>
		Now because it was broadcasted,<br>
		everybody, including you as well as Bob can access the encrypted message.<br>
		But since Bob only has your public key, and not your private key,<br><br>
		He can't decrypt the message.`
	},
	page15:
	{
		title: '',
		head: '',
		body: ``
	},
	page16:
	{
		title: '',
		head: '',
		body: `The above example assumes that your private keys are only with you
		and Bob can't access or intercept that. <strong>Handling private keys well is
		extremely important in cryptography.</strong><br>
		Just like <strong>public-­private key pair</strong> helped in accessing a message, they 
		can help in accessing the code that allows <strong>one to manipulate or spend bitcoin.</strong><br>
		We'll learn more about that later, but first we need to learn how to use
		the <strong>public key to form the wallet address for the bitcoin.</strong>`
	},
	page17:
	{
		title: '',
		head: 'Private key',
		body: `You might have noticed that the last para about public key 
		mentioned that 'no method is currently known' for calculating 
		the private key from the public key.<br>
		In case, researchers discover such a method in the future, 
		there is an additional safeguard put in place for the wallet 
		address. Rather than using the public key, in Bitcoin we run a 
		hashing operation twice on the public key to obtain the wallet
		address adding a further layer of safety`
	},
	page18:
	{
		title: '',
		head: '',
		body: `Iin Bitcoin we run a hashing operation twice on the public key to obtain the wallet
		address adding a further layer of safety<br>
		(Hashing is a rather important concept in blockchain and we will learn more about hashing later)<br>
		<div class='mt-3 card__footer'>Calculate the wallet address</div>`
	},
	page19:
	{
		title: '',
		head: `<span class="mx-2" >Wallet address generated</span>`,
		body: `<input class="mb-3 mx-2 input">`
	},
	page20:
	{
		title: '',
		head: '',
		body: `<strong>Congratulations, you've now generated a private key and
		a wallet address.<br><br>
		Warning:</strong> This is for educational purposes only. We don't 
		recommend using it for storing any actual bitcoin.<br>
		<center><div class='mt-5 card__footer next page__control__elem' data-dir='down'>next</div></center>`
	},
};

export const chapter3 =
{
	page1:
	{
		title: 'Chapter 3: Genesis Block',
		head: '',
		body: `<strong>Bitcoin's blockchain</strong> is a data structure where
		<strong>transactions are publicly verified and aggregated
		into blocks</strong> and each subsequent block is clearly
		linked to the previous one­ forming the <strong>implied
		chain of blocks.</strong><br>
		This is what the very first block of that chain
		looks like:`
	},
	page2:
	{
		title: '',
		head: '',
		body: `<div class='row'><div class='col-md-6'>${table1('1','50 BTC','0 BTC','0 BTC','0 (Main Chain)','2009-01-03 18:15:05','2009-01-03 18:15:05','Unknown','1','486604799','0.285 kB','0.896 kWU','1','2803236893','50 BTC',null,'0')}</div><div class='col-md-1'></div><div class='col-md-5'>${table2()}</div></div>`
	},
	page3:
	{
		title: '',
		head: "We will get into the details of some of the fields later. But for now, let's go into the link at the bottom that leads to the transaction details",
		body: ``
	},
	page4:
	{
		title: '',
		head: "",
		body: `<div class='row mb-3'><div class='col-12' style='color:#FFDA91;width:100%'>We'll get into the details of some of the fields later. But for now, let's go into the link at the bottom that leads to the transaction details:</div></div> 
		<div class='row my-4 align-items-center' style='width:100%'><div class='col-md-4' style=''>No inputs(newly generated coins)</div><div class='col-md-8 py-2' style='color:#001F74;background-color:#fff'><div class='row d-flex justify-content-around'><div class='col-8'>1A1zP1eP5QGefi...(Genesis of Bitcoin)-(Unspent)</div><div class='col-4'>50 BTC</div></div></div></div>
		<div class='row py-5' style='width:100%'><div class='col-md-7'>${table3('204 (bytes)','816','2009-01-03 18:15:05','0','Hide scripts from coinbase','View tree chart')}</div><div class='col-md-5 d-flex justify-content-around'><div style='height:min-content;border:solid 1px #fff;padding:10px 15px;border-radius:10px;'>Crypto credit</div><div style='height:min-content;border:solid 1px #fff;padding:10px 15px;border-radius:10px;'>50 BTC </div></div></div> `
	},
	page5:
	{
		title: '',
		head: '',
		body: `<div>Every block contains atleast one transaction, called <strong>Coinbase Transaction</strong> 
		that's a reward for the miner. We will learn more about it later, for now, we see that 
		<strong>50 bitcoins are generated in this transaction</strong> and go to Satoshi's wallet with the<br><br>
		<font style='color:#0025D3'><strong>Address: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</strong></font><br><br>
		Since this is recorded in blockchain, you can see the input and output of coins in this wallet.<br><br>
		Also as discussed earlier, while we can see the <strong>Wallet address</strong> (and send coins to it)
		we can't derive its private key, or else we will be able to withdraw the bitcoins deposited there* 
		(or by extension, in any other bitcoin wallet!).<br>
		For reference, current marketcap of total bitcoin is</div>`
	},
	page6:
	{
		title: '',
		head: "But what exactly are these 50 coins which are now associated with the cryptographic wallet?",
		body: ``
	},
	page7:
	{
		title: '',
		head: "",
		body: `The generation of these 50 coins is an <strong>'output' of the genesis block's single transaction.</strong>
		Rather than thinking of this 'output' as 50 different bitcoins, it might be better to think of it as a <strong>single encrypted note worth 50 bitcoins.</strong>`
	},
	page8:
	{
		title: '',
		head: "",
		body: `Since this Output of 50 bitcoins is associated with<br><br>
		<font style='color:#192352'><strong>Satoshi's wallet: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</strong></font><br><br>
		So this <strong>output</strong> can only be spent by using the private key of that wallet.`
	},
	page9:
	{
		title: '',
		head: "",
		body: `Since currently this <strong>output</strong> of 50 bitcoins is unspent, so it's known as <strong>Unspent transaction output or UTXO</strong><br><br>
		Collection of all such UTXO at the current moment is known as the <strong>UTXO set.</strong>`
	},
	page10:
	{
		title: '',
		head: `<br>Question`,
		body: `Suppose you mine three blocks with no transactions (except the coinbase transaction) and each time 50 bitcoin reward is sent to the same wallet address. Your wallet now shows a total balance of 150 bitcoins!<br>
		<strong>How many UTXOs now exist in the UTXO set?</strong><br>
		Choose one option<br><br>
		<form>
        <input type='radio' name='UTX' value='option1' id='option1'>
        <label for='option1'>One UTXO worth 150 bitcoins</label><br>
        <input type='radio' name='UTX' value='option2' id='option2'>
        <label for='option2'>Three UTXOs worth 50 bitcoins each</label><br><br>
        <input type='submit' value='Submit'>
		</form>
        `
	},
	page11:
	{
		title: '',
		head: `Next, we'll see what happens when we spend an <strong>unspent transaction output a.k.a UTXO</strong>`,
		body: `<center><div class='mt-5 card__footer next page__control__elem' data-dir='down'>next</div></center>`
	},
}

export const chapter4 =
{
	page1:
	{
		title: 'CHAPTER 4: THE FIRST TRANSACTION',
		head: '',
		body: `The first transaction between two wallets happened in <strong>block #170.</strong><br><br>
		As we can see in the diagram below, this block contains <strong>two transactions.</strong>`
	},
	page2:
	{
		title: '',
		head: '',
		body: `<div class='row'><div class='col-md-6'>${table1('2','100 BTC','10 BTC','0 BTC','170 (Main Chain)','2009-01-03 18:15:05','2009-01-03 18:15:05','Unknown','1','486604799','0.49 kB','1.716 kWU','1','2803236893','50 BTC','1','170')}</div><div class='col-md-1'></div><div class='col-md-5'>${table2()}</div></div>`
	},
	page3:
	{
		title: '',
		head: '',
		body: `<div style='word-break:break-word;text-align:center'>
		<div class='row mb-3' style='text-align:start'><div class='col-12'>Transactions</div></div>
		<div class='row'><div class='col-md-3'>No inputs (newly generated coins)</div><div class='col-md-2'><div class='arrow'></div></div><div class='col-md-4'>1A1zP1eP5QGefi...(Genesis of Bitcoin)-(Unspent)</div><div class='col-md-3'>50 BTC</div></div>
		<div class='row  my-5 mr-5' style='text-align:end;display:block'><div class='col-12 py-2' style='display:inline;border:solid 1px #fff;border-radius:10px'> 50 BTC</div></div>
		<div class='row'><div class='col-md-3'>12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S (50 BTC Output)</div><div class='col-md-2'><div class='arrow'></div></div><div class='col-md-4'>1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3(Spent)</div><div class='col-md-3'>10 BTC</div></div>
		<div class='row'><div class='col-md-5'></div><div class='col-md-4'>12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S (Spent)</div><div class='col-md-3'>30 BTC</div></div>
		<div class='row my-5 mr-5' style='text-align:end;display:block'><div class='col-12 py-2' style='display:inline;border:solid 1px #fff;border-radius:10px'> 50 BTC</div></div>
		</div>`
	},
	page4:
	{
		title: '',
		head: '',
		body: `<div>The first one, shown above is the creation of a <strong>50 bitcoin UTXO for the miner.</strong><br><br>
		We've seen this type of transaction­ called <strong>'coinbase transaction'</strong> before in <strong>Block #0</strong>
		and will study later in more detail.<br><br>
		Currently, we're more interested in the <strong>second transaction shown below­ the first transfer 
		of Bitcoins between two wallets.</strong></div>`
	},
	page5:
	{
		title: '',
		head: '',
		body: `<div>This transaction was conducted between<br><br>
		<font style='color:#0025D3'><strong>Wallet "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S"</strong></font> <br><br>
		which belonged to <strong>Satoshi Nakamoto</strong> and <br><br>
		<font style='color:#0025D3'><strong>Wallet "1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3"</strong></font><br><br>
		which belonged to a noted cryptographic activist <strong>Hal Finney.</strong></div>`
	},
	page6:
	{
		title: '',
		head: '',
		body: `As we can see, Satoshi's wallet contained <strong>50 BTC</strong> and then it 
		sends <strong>10 BTC </strong>to Hal Finney's wallet.<br><br>
		However, we also notice that there is <strong>another 40 BTC </strong><br><br>
		which is being sent... back to Satoshi's wallet!<br><br>
		<strong>Why is this happening?</strong>`
	},
	page7:
	{
		title: '',
		head: "",
		body: `The answer is in the <strong>concept of UTXO.</strong><br><br>
		As mentioned earlier, it's better to think of a <strong>UTXO as a single encrypted 
		note rather than a collection of individual bitcoins.</strong><br><br>
		Think of it like this: if you owe someone $10, and you only had a $20
		note, you wouldn't tear it in half to pay the other person.<br><br>
		Rather, you'd likely exchange your $20 note for two new $10 notes and give 
		one to the other person and put the second $10 note back in your wallet.`
	},
	page8:
	{
		title: '',
		head: "",
		body: `Similarly, the <strong>existing UTXOs</strong> associated with a wallet are summed
		up till the payment amount is equalled or surpassed, and then they
		are accessed with the <strong>private key of the wallet to send a UTXO</strong> of
		the payment amount to the payee, and perhaps <strong>another UTXO of the
		remainder amount (if any) back to the sender's wallet.</strong>`
	},
	page9:
	{
		title: '',
		head: "",
		body: `<div>The answer is in the <strong>concept of UTXO.</strong><br><br>
		As mentioned earlier, it's better to think of a <strong>UTXO as a single encrypted 
		note rather than a collection of individual bitcoins.</strong><br><br>
		Think of it like this: if you owe someone $10, and you only had a $20
		note, you wouldn't tear it in half to pay the other person.<br><br>
		Rather, you'd likely exchange your $20 note for two new $10 notes and give 
		one to the other person and put the second $10 note back in your wallet.</div>
		<div class='mt-3 card__footer'>Link of UTXO related code</div>`
	},
	page10:
	{
		title: '',
		head: "",
		body: `<div class='row' style='text-align:center'>
		<div class='col-md-6'><div class='card__block'> Satoshi's Wallet 'A'<br>Balance displayed: 50</div></div>
		<div class='col-md-6'><div class='card__block'> Hal's Wallet 'B'<br>Balance displayed: 0</div></div>
		</div>
		<div class='row' style='text-align:center'>
		<div class='col-md-6'><div class='card__block'> 1 UTXO of 50 bitcoin<br>associated with A </div></div>
		<div class='col-md-6'><div class='card__block'> No UTXO associated<br>associated with B</div></div>
		</div>
		<div class='row' style='text-align:center'>
		<div class='card__footer'>Send 10 BTC from Wallet A to B</div>
		<div>`
	},
	page11:
	{
		title: '',
		head: ``,
		body: `<div class='row'>
		<div class='col-md-6'><div class='card__block'> Satoshi's Wallet 'A'<br>Balance displayed: 50</div></div>
		<div class='col-md-6'><div class='card__block'> Hal's Wallet 'B'<br>Balance displayed: 0</div></div>
		</div>
		<div class='row'>
		<div class='col-md-6'><div class='card__block card__block--red'> 1 UTXO of 50 bitcoin<br>associated with A</div></div>
		<div class='col-md-6'><div class='card__block'> No UTXO associated<br>associated with B </div></div>
		</div>
		<div class='row just'>
		<div class='col-md-6'><div class='card__block'> 1 UTXO of 50 bitcoin<br>associated with A</div></div>
		<div class='col-md-6' style='z-index:-1'><div class='card__block'> 1 UTXO of 50 bitcoin<br>associated with A</div></div>
		</div>`
	},
	page12:
	{
		title: '',
		head: ``,
		body: `Each subsequent <strong>UTXO</strong> created also contains the record of <strong>previous wallet ownerships.</strong><br>	
		So it's possible to track any fraction of bitcoin (a bitcoin can be divided down to 8 decimal 
		places, similar to how a dollar can be divided upto 2 decimal places) right from the original 
		coinbase transaction to the payee wallet P, to the next payee wallet Q and so on till the 
		current payee wallet.
		<center><div class='mt-5 card__footer next page__control__elem' data-dir='down'>next</div></center>`
	},
};


export const chapter5 = 
{
	page1:
	{
		title: 'CHAPTER 5: Hash',
		head: "We've first encoutered the term 'hash' or 'hashing' in chapter 2 about the wallets when we hashed the public key twice to convert it into a wallet address.",
		body: ``
	},
	page2:
	{
		title: '',
		head: "Additionally, we've then also seen it in the block information. Let's look at Block #0 again",
		body: ``
	},
	page3:
	{
		title: '',
		head: '',
		body: `<div class='row'><div class='col-md-6'>${table1('1','50 BTC','0 BTC','0 BTC','0 (Main Chain)','2009-01-03 18:15:05','2009-01-03 18:15:05','Unknown','1','486604799','0.285 kB','0.896 kWU','1','2803236893','50 BTC',null,'0')}</div><div class='col-md-1'></div><div class='col-md-5'>${table2('000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f','00000000000000000000000000000000000000000000000000000000000000','000000008b665ds2d6sd66f265d65f5d56f56d565s5f5f6s5gwerrh56sf56stev5','4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b','1')}</div></div>`
	},
	page4:
	{
		title: '',
		head: '',
		body: `We again see the hash information in the block above.<br><br>
		To further extend our understanding of blockchain, we will first have to understand what is a hash.`
	},
	page5:
	{
		title: '',
		head: 'So, what is a hash?',
		body: ``
	},
	page6:
	{
		title: '',
		head: ``,
		body: `A hash function takes an input of data of any arbitrary size (so the size of the input could be as small as a single character or as big as the entire text of all the
		online books; or even bigger) and then produces a unique output of fixed size irrespective of the input size.<br><br>
		This fixed size output is also called the <strong>hash</strong> of the input data.`
	},
	page7:
	{
		title: '',
		head: '',
		body: `Additionally, one can't obtain the original data from this hash, but this hash can be used to quickly verify the initial input.<br><br>
		Think of how we can verify our identity by our fingerprint. Each time we have to prove our identity, say for obtaining a visa, we have to submit our fingerprints which is then matched against the previously stored fingerprint in the official database.<br><br>
		Hashing is, in a way, the digital fingerprint of any given set of data to quickly identify it without going through the whole content.`
	},
	page8:
	{
		title: '',
		head: `Let's try it out!`,
		body: ``
	},
	page9:
	{
		title: '',
		head: '',
		body: `<input class="mx-2 my-4 input" value='Enter your name'><br>
		<div class='card__button px-3 py-2'>Generate the hash</div><br>
		<input class="mx-2 my-4 input" value='Result' disabled><br>
		<div class='mt-5 card__footer'>Link to the Hashing code</div>`
	},
	page10:
	{
		title: '',
		head: '',
		body: `Let's try another option. This time, let's input lengthier data.<br><br>
		Given below, we've copied <strong>A cypherpunk's manifesto</strong> text which is said to have directly or indirectly inspired many cryptographers including Satoshi Nakamoto and Hal Finney who were a part of <strong>cypherpunk mailing list called metzdowd.</strong>`
	},
	page11:
	{
		title: '',
		head: '',
		body: `<div class='row p-5' style='width:100%'>
		<div class='col-md-7'><textarea style='width:100%' class='input card__textbox'></textarea></div>
		<div class='col-md-5'><div class='row'>
		<div class='col-12 my-5'><div class='card__button px-3 py-3'>Generate the hash</div></div>
		<div class='col-12'><input class="input" value='Result' disabled></div></div></div>
		<br>
		<div class='row px-5'>
		<div class='col-12'><div class='mt-5 card__footer'>Link to the Hashing code</div></div>`
	},
	page12:
	{
		title: '',
		head: '',
		body: `<br><br>You'll notice that irrespective of the input length, the output is the same.<br><br>
		There are various hashing algorithms; the one that bitcoin follows is SHA256. Which is named so because it contains 256 bits of information.<br><br>
		If the hash were represented in binary format where each place has 2^1 options (basically, 0 or 1), then we will need a string of 256 ones and zeroes to represent it.<br><br>
		However, since we are using hexadecimal notation, for each place there are 2^4 options. Thus to represent 256 bits we just need (256/4=) 64 characters.<br><br>
		That's why hashes in Bitcoin (such as private keys, wallet addresses, transaction ids, block hashes etc.) are strings of 64 hexadecimal characters.`
	},
	page13:
	{
		title: '',
		head: 'But why do we want 256 bits of information in a hash?',
		body: ``
	},
	page14:
	{
		title: '',
		head: '',
		body: `Well, having 256 bits mean that we can generate 2^256 different hashes which is an incredibly huge number. This allows us to work with hashes without worrying about two different inputs giving the same hash output (an occurance which has an infinitismal probability because of the enormous key space provided by SHA256)`
	},
	page15:
	{
		title: '',
		head: "Now, it's time to see how hashes help connect the blocks of a blockchain together.",
		body: `<center><div class='mt-3 card__footer next page__control__elem' data-dir='down'>next</div></center>`
	},
};

export const chapter6 = 
{
	page1:
	{
		title: 'CHAPTER 6: Hashing a block',
		head: "When a new block is created, it needs to be added to the existing chain. For doing this, it needs to have some reference to the position in the chain where it needs to fit.",
		body: ``
	},
	page2:
	{
		title: '',
		head: "It does so by identifying the last block in the chain which it wants to append itself to.",
		body: ``
	},
	page3:
	{
		title: '',
		head: '',
		body: `As we have learned in the last chapter, hash provides an easy identification method. It's improbable to fake a hash but quick and easy to verify one.<br><br>
		These properties makes it ideal for a new block to make a reference to the last block in the chain by using the last block's hash.`
	},
	page4:
	{
		title: '',
		head: '',
		body: `The calculate the block hash, the following 6 fields are considered:<br><br>
		1. The Bitcoin version number. (4 Bytes)<br>
		2. The previous block's hash.(32 Bytes)<br>
		3. The Merkle Root of all the transactions that are selected to be in that block. (32 Bytes)<br>
		4. The timestamp of the block generation.(4 Bytes)<br>
		5. The difficulty target. (4 Bytes)<br>
		6. The Nonce. (4 Bytes)`
	},
	page5:
	{
		title: '',
		head: "Let's look at these values for Block #0 (header fields are marked in red) which give the resulting hash (marked in blue)",
		body: ``
	},
	page6:
	{
		title: '',
		head: ``,
		body: `<div class='row'><div class='col-md-6'>${table1('1','50 BTC','0 BTC','0 BTC','0 (Main Chain)','2009-01-03 18:15:05','2009-01-03 18:15:05','Unknown','1','486604799','0.285 kB','0.896 kWU','1','2803236893','50 BTC',null,'0')}</div><div class='col-md-1'></div><div class='col-md-5'>${table2('000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f','00000000000000000000000000000000000000000000000000000000000000','000000008b665ds2d6sd66f265d65f5d56f56d565s5f5f6s5gwerrh56sf56stev5','4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b')}</div></div>`
	},
	page7:
	{
		title: '',
		head: '',
		body: `Calculated block hash<br>
		<input class="mx-2 my-3 input" style='width:min-content' value='000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f' disabled><br>
		Block hash in block 0<br>
		<input class="mx-2 my-3 input" style='width:min-content' value='000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f' disabled>`
	},
	page8:
	{
		title: '',
		head: ``,
		body: `As we can see, our calculated hash of block #0 becomes the reference of previous block for block #1.<br><br>
		Similarly, hash of block #1 will become a reference for block #2 and so on
		<center><div class='mt-5 card__footer next page__control__elem' data-dir='down'>next</div></center>`
	},
};

export const chapter7 = 
{
	page1:
	{
		title: 'CHAPTER 7: THE NONCE, PROOF-OF-WORK AND MINING',
		head: "",
		body: `Alright! We just created the hash of a block that allows us to connect the 0th and 1st blocks together and begin to form the blockchain. The same process can be further
		continued to grow the chain.<br><br>
		Once we become a bit familiar with the process, it's actually pretty easy.`
	},
	page2:
	{
		title: '',
		head: "However, adding a new block to the blockchain, or even proposing that, shouldn't be easy.",
		body: ``
	},
	page3:
	{
		title: '',
		head: 'Why?',
		body: `The easier it is to propose a new block, the easier it will be to try and add false data to the blockchain or to spam it with little or no effort.`
	},
	page4:
	{
		title: '',
		head: '',
		body: `So, to reduce malicious behaviour, participating in the blockchain network and proposing or adding a block has to be made more difficult.`
	},
	page5:
	{
		title: '',
		head: '',
		body: `How can we do that?<br><br>
		We can do that by putting up a condition that not every hash will be acceptable, rather that the only acceptable hashes will be the ones that fulfill certain conditions­ such as that
		they should have a certain number of zeroes at the beginning.`
	},
	page6:
	{
		title: '',
		head: ``,
		body: `That sounds good, but for any input, the output hash is fixed. So, we can't really change the output hash, unless we are also changing the input data in some way.<br><br>
		We need a field in the input data ­ which we learned in the last lesson is the blocker head­ that is not a constant but a variable that we can freely change.`
	},
	page7:
	{
		title: '',
		head: '',
		body: `The block header already contains that variable and it is called <strong>The Nonce.</strong>`
	},
	page8:
	{
		title: '',
		head: ``,
		body: `<div class='row'><div class='col-md-6'>${table1('1','50 BTC','0 BTC','0 BTC','0 (Main Chain)','2009-01-03 18:15:05','2009-01-03 18:15:05','Unknown','1','486604799','0.285 kB','0.896 kWU','1','2803236893','50 BTC',null,'0')}</div><div class='col-md-1'></div><div class='col-md-5'>${table2('000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f','00000000000000000000000000000000000000000000000000000000000000','000000008b665ds2d6sd66f265d65f5d56f56d565s5f5f6s5gwerrh56sf56stev5','4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b')}</div></div>`
	},
	page9:
	{
		title: '',
		head: '',
		body: `Calculated block hash<br>
		<input class="my-4 mx-2 input" style='width:75%' value='Value based on nonce' disabled><br>
		Difficulty target (Derived from bits)<br>
		<input style='width: 75%' class="mx-2 my-4 input" value='00000000ffff0000000000000000000000000000000000000000000000000000' disabled>`
	},
	page10:
	{
		title: '',
		head: '',
		body: `You can keep trying to see if you randomly get a nonce value which will generate the desired hash which is lower than the difficulty target, however you may have to try a few
		millions (or even billions) of times to get that right.`
	},
	page11:
	{
		title: '',
		head: '',
		body: `This is why, this is usually left to high power computer rigs. A lot of computing power is required to get this right and to get this right quickly.`
	},
	page12:
	{
		title: '',
		head: '',
		body: `Getting the nonce right, and producing the hash which is below the difficulty level is the <strong>proof­-of-­work.</strong>`
	},
	page13:
	{
		title: '',
		head: '',
		body: `The whole process of calculating the right hash for the block and then submitting the block to the chain is known as <strong>mining.</strong>
		<center><div class='mt-5 card__footer next page__control__elem' data-dir='down'>next</div></center>`
	},
};

export const chapter8 = 
{
	page1:
	{
		title: 'Chapter 8: Mining rewards',
		head: 'In the last chapter, we saw that a lot of computation power is required to do the proof of work and add a new block to the blockchain.',
		body: ``
	},
	page2:
	{
		title: '',
		head: "",
		body: ``
	},
	page3:
	{
		title: '',
		head: "",
		body: ``
	},
	page4:
	{
		title: '',
		head: "The fact that the Bitcoin's blockchain is public means that anybody who is willing to do the required work can add a new block.",
		body: ``
	},
	page5:
	{
		title: '',
		head: "However, the question arises about why would someone be willing to do all that work to verify new bitcoin transactions?",
		body: ``
	},
	page6:
	{
		title: '',
		head: "The answer initially offered is that they would get some of the bitcoin themselves as a reward.",
		body: ``
	},
	page7:
	{
		title: '',
		head: "Let's look at block #0 again",
		body: ``
	},
	page8:
	{
		title: '',
		head: "Here, Satoshi did the mining and got a reward of 50 bitcoins.",
		body: ``
	},
	page9:
	{
		title: '',
		head: "Every block's first transaction is called the 'coinbase transaction' and is a reward to the miner who added the new block to the chain through the process of mining.",
		body: ``
	},
	page10:
	{
		title: '',
		head: "Today, those 50 bitcoins given out as a reward are worth:",
		body: `<input class="mx-2 my-4 input" value=''>
		<div style='display:inline'> Bitcoins  =  </div>
		<input class="mx-2 my-4 input" value='' disabled>
		<div style='display:inline'> USD  </div>`
	},
	page11:
	{
		title: '',
		head: "However, at the time of mining, they were worthless.",
		body: `<div>The first time somebody exchanged a bitcoin for a physical good, they ordered pizzas (Of course!)</div><br><br>
		<input class="mx-2 my-4 input" value=''>
		<div style='display:inline'> Pizzas for  </div>
		<input class="mx-2 my-4 input" value='' disabled>
		<div style='display:inline'> Bitcoins </div><br>
		<div style='display:inline'> = </div>
		<input class="mx-2 my-4 input" value='' disabled>
		<div> USD  </div>`
	},
	page12:
	{
		title: '',
		head: '',
		body: `<strong>On 22 May, 2010, </strong>a Florida man bought two pizzas for 10,000 bitcoins. Given that it was the first time anybody exchanged bitcoins for a physical good, this day is often celebrated as the Pizza day by the bitcoin community.<br><br>
		Today, if you made the same deal you will pay the following cost:`
	},
	page13:
	{
		title: '',
		head: "Those pizzas aren't cheap!",
		body: `But why is it that the bitcoin value has changed so much?`
	},
	page14:
	{
		title: '',
		head: '',
		body: `While there can be various micro­level factors, on the macro­level, the value increase can be understood through <strong>Metcalfe's law</strong>`
	},
	page15:
	{
		title: '',
		head: "",
		body: `Simply stated, Metcalfe's law says that a network's value is proportional to the square of the number of people/entities in that network.`
	},
	page16:
	{
		title: '',
		head: ``,
		body: `This is applicable for phone networks, social networks (for an intuitive example, if all your friends are joining a new social network then its value will increase for you) and so on.`
	},
	page17:
	{
		title: '',
		head: '',
		body: `So, it was predictable that as more people will join Bitcoin's network, more valuable it will become.`
	},
	page18:
	{
		title: '',
		head: '',
		body: `That's why Satoshi programmed it so that the miner's rewards in bitcoins are reduced over time as a bitcoin's value increases.`
	},
	page19:
	{
		title: '',
		head: "",
		body: `The miner's rewards are halved every 210,000 blocks.`
	},
	page20:
	{
		title: '',
		head: '',
		body: `Once 21 million bitcoins have been distributed as miner's reward (or, in other words, have been mined) there will be no more new bitcoins.`
	},
	page21:
	{
		title: '',
		head: '',
		body: `At that time, miner's reward will become zero and they will have to rely on transaction fee only which a sender has a choice to include or not. In turn, the miner has the choice to select the high fee.<br><br>
		Transactions for his block and leave out the low or <strong>zero fee tranactions.</strong>`
	},
	page22:
	{
		title: '',
		head: "21 millionth bitcoin is likely to be mined around year 2140",
		body: ``
	},
	page23:
	{
		title: '',
		head: '',
		body: `It does so by identifying the last block in the chain which it wants to append itself to.
		<center><div class='mt-5 card__footer next page__control__elem' data-dir='down'>next</div></center>`
	},
};

export const chapter9 = 
{
	page1:
	{
		title: 'CHAPTER 9',
		head: "",
		body: `<strong>Bitcoin</strong>is a vast topic and involves many different disciplines
		such as economics, finance, security, cryptogrpahy, 
		network theory and so on.`
	},
	page2:
	{
		title: '',
		head: "",
		body: `<strong>This interactive</strong> tutorial only gives you an <strong>overview</strong> of 
		the bitcoin. <br><br>
		<strong>If you're interested, there's much more to learn!</strong>`
	},
	page3:
	{
		title: '',
		head: '',
		body: `<strong>Some of our recommended resources are:</strong>`
	},
	page4:
	{
		title: '',
		head: '1. Bitcoin source code',
		body: `Since Bitcoin is open source, the entire code is
		available online. You can play around, contribute, 
		or simply read the documentation.`
	},
	page5:
	{
		title: '',
		head: '2. Bitcoin white paper',
		body: `It's brief and dense and completely worth reading. 
		See how Satoshi	introduced Bitcoin to the world.`
	},
	page6:
	{
		title: '',
		head: `3. Mastering Bitcoin`,
		body: `Andreas Antonopoulos was one of the early evangelists
		of Bitcoin and has done a great job in educating the
		community about it. This free online edition will give you
		all the detailed explanation in an accessible language.`
	},
	page7:
	{
		title: '',
		head: '4. Cryptonomicon',
		body: `Ok, after all the serious studies about the bitcoin, we
		also recommend to get some fictional perspective on
		the human side of cryptography. 
		Neil Stephensons' excellent novel gives you a lot to think
		about how cryptography has affected our lives and 
		continues to do so.`
	},
};

export default captions;