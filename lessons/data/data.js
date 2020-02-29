;

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
		body: `In the early 1970s, few mathematicians and cryptographers came up with the concept of asymmetric encryption or the public key encryption.<br/>
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
		body: `A private key is essentially a randomly generated number between 1 and 2^256.<br/>
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
		body: `Once the random private key is selected, the corresponding public key can be calculated. <br/>However, no method is currently known that allows one to calculate the private key from the public key`
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
		body: `Now, let's take an example of how this works.<br/>
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
		body: `Now, suppose Alice has a message for you.<br/>
		she wants to ensure that only you can access the message's content.<br/>
		She encrypts the message using your public key and broadcasts it.<br/>
		Now because it was broadcasted,<br/>
		everybody, including you as well as Bob can access the encrypted message.<br/>
		But since Bob only has your public key, and not your private key,<br/>
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
		can help in accessing the code that allows <strong>one to manipulate or spend bitcoin.</strong><br/>
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
		a wallet address.<br>
		Warning:</strong> This is for educational purposes only. We don't 
		recommend using it for storing any actual bitcoin.`
	},
};


export default captions;