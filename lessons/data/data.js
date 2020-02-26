;

export const captions = {
	c1 : 'Published on October 31, 2008',
	c2 : 'Enigma : Used in world war II',
	c3 : 'Enigma : Used in world war III',

	key: function(n) {
        return this[Object.keys(this)[n]];
    }
};

export const chapter1 = 
{
	page1:
	{
		title: 'CHAPTER 1: INTRODUCTION',
		head: 'On 31st Oct 2008, a mysterious figure Satoshi Nakamoto ­ published the Bitcoin white paper.',
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
		head: "While the modern day blockchain platforms (such as our own Zilliqa!) have further built upon the original concept, Bitcoin's blockchain still remains a great starting point to learn about how the blockchain technology works.",
		body: ''
	},
	page4:
	{
		title: '',
		head: `<span style='text-center'>So, let's start learning!</span>`,
		body: ''
	},

};


export default captions;