
// var default_pic = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
var default_pic = 'images/avatar_1.jpg';

let user = {
	id: 0,
	name: "Samuel Torres",
	number: "+91 91231 40293",
	// pic: "images/asdsd12f34ASd231.png"
	// pic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
	pic: 'images/avatar_1.jpg'
};

let contactList = [
	user,
	{
		id: 1,
		name: "Nitin",
		number: "+91 98232 37261",
		pic: default_pic,
		lastSeen: "Apr 28 2018 22:18:21"
	},
	{
		id: 2,
		name: "Sanjay",
		number: "+91 72631 2937",
		pic: default_pic,
		lastSeen: "Apr 28 2018 19:23:16"
	},
	{
		id: 3,
		name: "Suvro Mobile",
		number: "+91 98232 63547",
		pic: default_pic,
		lastSeen: "Apr 29 2018 11:16:42"
	},
	{
		id: 4,
		name: "Dee",
		number: "+91 72781 38213",
		pic: default_pic,
		lastSeen: "Apr 27 2018 17:28:10"
	},
	{
		id: 5,
		name: "Samuka",
		number: "+91 72781 38764",
		pic: default_pic,
		lastSeen: "Apr 27 2018 17:28:10"
	}
];

let groupList = [
	{
		id: 1,
		name: "Programmers",
		members: [0, 1, 3],
		pic: default_pic
	},
	{
		id: 2,
		name: "Web Developers",
		members: [0, 2, 3, 4, 5],
		pic: default_pic
	},
	{
		id: 3,
		name: "Notes",
		members: [0, 1, 3],
		pic: default_pic
	}
];

// message status - 0:sent, 1:delivered, 2:read

let messages = [
	{
		id: 0,
		sender: 5,
		body: "where are you, buddy?",
		time: "August 15, 2019 13:21:03",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 0,
		sender: 2,
		body: "where are you, buddy?",
		time: "August 15, 2019 13:21:03",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 0,
		sender: 0,
		body: "where are you, buddy?",
		time: "August 15, 2019 13:21:03",
		status: 3,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 0,
		sender: 0,
		body: "HAHAHAHA",
		time: "August 15, 2019 13:21:03",
		status: 3,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 0,
		sender: 0,
		body: "Some other text message",
		time: "August 15, 2019 13:21:03",
		status: 3,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 0,
		sender: 0,
		body: "Content extra large to test the message box, something wrong here? i think so not! Congrats, but ill stay testing, to find some bug to fix, haha, this is so funny",
		time: "August 16, 2019 06:21:03",
		status: 3,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 1,
		sender: 0,
		body: "at home",
		time: "April 25, 2018 13:22:03",
		status: 2,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 2,
		sender: 0,
		body: "how you doin'?",
		time: "April 25, 2018 18:15:23",
		status: 2,
		recvId: 3,
		recvIsGroup: false
	},
	{
		id: 3,
		sender: 3,
		body: "i'm fine...wat abt u?",
		time: "April 25, 2018 21:05:11",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 4,
		sender: 0,
		body: "i'm good too",
		time: "April 26, 2018 09:17:03",
		status: 1,
		recvId: 3,
		recvIsGroup: false
	},
	{
		id: 5,
		sender: 3,
		body: "anyone online?",
		time: "April 27, 2018 18:20:11",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	},
	{
		id: 6,
		sender: 1,
		body: "have you seen infinity war?",
		time: "April 27, 2018 17:23:01",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 7,
		sender: 0,
		body: "are you going to the party tonight?",
		time: "April 27, 2018 08:11:21",
		status: 2,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 8,
		sender: 2,
		body: "no, i've some work to do..are you?",
		time: "April 27, 2018 08:22:12",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 9,
		sender: 0,
		body: "yup",
		time: "April 27, 2018 08:31:23",
		status: 1,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 87590,
		sender: 0,
		body: "if you go to the movie, then give me a call",
		time: "April 27, 2018 22:41:55",
		status: 2,
		recvId: 4,
		recvIsGroup: false
	},
	{
		id: 7632745,
		sender: 1,
		body: "yeah, i'm online",
		time: "April 28 2018 17:10:21",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	},
	{
		id: 8276587,
		sender: 0,
		body: "yeah, i'm online",
		time: "April 28 2018 17:10:21",
		status: 0,
		recvId: 3,
		recvIsGroup: true
	},
	{
		id: 87250,
		sender: 2,
		body: "yeah, i'm online",
		time: "April 28 2018 17:10:21",
		status: 0,
		recvId: 2,
		recvIsGroup: true
	},
	{
		id: 87250,
		sender: 0,
		body: "Message from me",
		time: "April 28 2018 17:10:21",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	}
];

let MessageUtils = {
	getByGroupId: (groupId) => {
		return messages.filter(msg => msg.recvIsGroup && msg.recvId === groupId);
	},
	getByContactId: (contactId) => {
		return messages.filter(msg => {
			return !msg.recvIsGroup && ((msg.sender === user.id && msg.recvId === contactId) || (msg.sender === contactId && msg.recvId === user.id));
		});
	},
	getMessages: () => {
		return messages;
	},
	changeStatusById: (options) => {
		messages = messages.map((msg) => {
			if (options.isGroup) {
				if (msg.recvIsGroup && msg.recvId === options.id) msg.status = 2;
			} else {
				if (!msg.recvIsGroup && msg.sender === options.id && msg.recvId === user.id) msg.status = 2;
			}
			return msg;
		});
	},
	addMessage: (msg) => {
		msg.id = messages.length + 1;
		messages.push(msg);
	}
};