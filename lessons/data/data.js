;import { table1, table2 } from './table.js';

export const captions = [[
	'Published on October 31, 2008',
	'Blockchain',
	'Zilliqa',
	'Blockchain',
	],[
	'ENIGMA: USED IN WORLD WAR II',
	'Cryptography',
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
	'Github code',
	'Blockchain',
    ],[
    ''
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
		body: ''
	},

};

export const chapter2 = 
{
	page1:
	{
		title: 'CHAPTER 2: PRIVATE KEY AND WALLET ADDRESS',
		head: 'Symmetric encryption',
		body: `Before the mid 1970s, a single key was used to encrypt as well as decrypt a message. This often meant that the sender and the receiver of the message had to possess the same key­ this of course created the question about how could the sender and receiver share the secret key with each other without it being intercepted.`
	},
	page2:
	{
		title: '',
		head: 'Asymmetric encryption',
		body: `In the early 1970s, few mathematicians and cryptographers came up with the concept of asymmetric encryption or the public key encryption.<br>
				Here, the encryption was done by one key, the public key.`
	},
	page3:
	{
		title: '',
		head: 'Fun Trivia',
		body: `Till 1992, cryptography was on the U.S. Munitions List as an Auxiliary Military Equipment. Such an attitude was common among the governments and because of that the first known discovery of asymmetric encryption by UK Government Communications Headquarters (GCHQ), wasn't publicly acknowled till 1997.`
	},
	page4:
	{
		title: '',
		head: '',
		body: `Now, to understand the asymmetric encryption, that involves a public and a private key for encrypting and decrypting a message, let's start with the concept of private key.`
	},
	page5:
	{
		title: '',
		head: 'Private key',
		body: `A private key is essentially a randomly generated number between 1 and 2^256.<br>
				While any method can be used to pick this random number, it’s recommended that one uses a cryptographically secure pseudorandom number generator (CSPRNG) with a seed from a source of sufficient entropy.`
	},
	page6:
	{
		title: '',
		head: `<span class="mx-2" >Your random private key</span>`,
		body: `<input class="mb-3 mx-2 input">`
	},
	page7:
	{
		title: '',
		head: 'Public key',
		body: `Once the random private key is selected, the corresponding public key can be calculated. <br>However, no method is currently known that allows one to calculate the private key from the public key`
	},
	page8:
	{
		title: '',
		head: `<span class="mx-2" >Public key calculated</span>`,
		body: `<input class="mb-3 mx-2 input">`
	},
	page9:
	{
		title: '',
		head: '',
		body: `Now, let's take an example of how this works.<br>
		Suppose, you distribute the <strong>public key</strong> created above so that anybody
		who wants to contact you <strong>can encrypt the message with that key.</strong>`
	},
	page10:
	{
		title: '',
		head: '',
		body: ``
	},
	page11:
	{
		title: '',
		head: '',
		body: `Now, suppose Alice has a message for you.<br>
		she wants to ensure that only you can access the message's content.<br>
		She encrypts the message using your public key and broadcasts it.<br>
		Now because it was broadcasted,<br>
		everybody, including you as well as Bob can access the encrypted message.<br>
		But since Bob only has your public key, and not your private key,<br>
		He can't decrypt the message.`
	},
	page12:
	{
		title: '',
		head: '',
		body: ``
	},
	page13:
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
	page14:
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
	page15:
	{
		title: '',
		head: `<span class="mx-2" >Wallet address generated</span>`,
		body: `<input class="mb-3 mx-2 input">`
	},
	page16:
	{
		title: '',
		head: '',
		body: `<strong>Congratulations, you've now generated a private key and
		a wallet address.<br><br>
		Warning:</strong> This is for educational purposes only. We don't 
		recommend using it for storing any actual bitcoin.`
	},
};

export const chapter3 =
{
	page1:
	{
		title: 'Chapter3: Genesis Block',
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
		body: `<div class='row'><div class='col-md-6'>${table1('50 BTC','0 BTC','0 BTC','0 (Main Chain)','2009-01-03 18:15:05','2009-01-03 18:15:05','Unknown','1','486604799','0.285 kB','0.896 kWU','1','2803236893','50 BTC')}</div><div class='col-md-1'></div><div class='col-md-5'>${table2()}</div></div>`
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
		head: "We will ",
		body: ``
	},
	page5:
	{
		title: '',
		head: '',
		body: `Every block contains atleast one transaction, called <strong>Coinbase Transaction</strong> 
		that's a reward for the miner. We will learn more about it later, for now, we see that 
		<strong>50 bitcoins are generated in this transaction</strong> and go to Satoshi's wallet with the<br>
		<font style='color:#192352'><strong>Address: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</strong></font><br>
		Since this is recorded in blockchain, you can see the input and output of coins in this wallet.<br>
		Also as discussed earlier, while we can see the <strong>Wallet address</strong> (and send coins to it)
		we can't derive its private key, or else we will be able to withdraw the bitcoins deposited there* 
		(or by extension, in any other bitcoin wallet!).<br>
		For reference, current marketcap of total bitcoin is`
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
		body: `Since this Output of 50 bitcoins is associated with<br>
		<font style='color:#192352'><strong>Satoshi's wallet: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</strong></font><br>
		so this <strong>output</strong> can only be spent by using the private key of that wallet.`
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
		head: "Question",
		body: `Suppose you mine three blocks with no transactions (except the coinbase transaction) and each time 50 bitcoin reward is sent to the same wallet address. Your wallet now shows a total balance of 150 bitcoins!<br><br>
		<strong>How many UTXOs now exist in the UTXO set?</strong><br>
		Choose one option<br><br>
		<form>
        <input type='radio' name='UTX' value='option1' id='option1'>
        <label for='option1'>One UTXO worth 150 bitcoins</label><br>
        <input type='radio' name='UTX' value='option2' id='option2'>
        <label for='option2'>Three UTXOs worth 50 bitcoins each</label><br><br>
        <input type='submit'>
		</form>
        `
	},
	page11:
	{
		title: '',
		head: "We will ",
		body: ``
	},
	page12:
	{
		title: '',
		head: "We will ",
		body: ``
	},
	page13:
	{
		title: '',
		head: "We will ",
		body: ``
	},
	page14:
	{
		title: '',
		head: "We will ",
		body: ``
	},
} 


export default captions;