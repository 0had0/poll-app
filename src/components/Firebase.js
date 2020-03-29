import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDrbOgexGmV-58CBt0Vv9RFjIpf4Aq3bCQ",
	authDomain: "poll-app-75.firebaseapp.com",
	databaseURL: "https://poll-app-75.firebaseio.com",
	projectId: "poll-app-75",
	storageBucket: "poll-app-75.appspot.com",
	messagingSenderId: "199805304068",
	appId: "1:199805304068:web:7adf7d1fa169dc67e1a451",
	measurementId: "G-BFY1H5V91Z"
};

class Firebase {
	constructor() {
		this.firebase = firebase.initializeApp(firebaseConfig);
		firebase.analytics();
		this.db = firebase.firestore();
		this.auth = firebase.auth();
	}
	async signInAnonymous(setAuthUser, setLoading) {
		await this.auth
			.signInAnonymously()
			.then(authUser => {
				setAuthUser(authUser.user);
				setLoading(false);
				return authUser;
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	async checkAuth() {
		return await this.auth.onAuthStateChanged(user => {
			if (user) {
				console.log(user);
				return user;
			} else {
				console.log("shit");
			}
		});
	}
	async addPoll(question) {
		let id = null;
		id = await this.db
			.collection("polls")
			.add({
				question,
				yes: 0,
				no: 0
			})
			.then(docRef => docRef.id)
			.catch(error => console.log(error));
		return id;
	}
	async vote(id, answer) {
		const docRef = await this.db.collection("polls").doc(id);
		if (answer === "y") {
			return await docRef
				.update({
					yes: firebase.firestore.FieldValue.increment(1)
				})
				.then(() => console.log("updated"))
				.catch(error => console.log(error));
		} else {
			return await docRef
				.update({
					no: firebase.firestore.FieldValue.increment(1)
				})
				.then(() => console.log("updated"))
				.catch(error => console.log(error));
		}
	}
	async checkId(id, setStatus) {
		await this.db
			.collection("polls")
			.doc(id)
			.get()
			.then(doc => {
				if (doc.exists) setStatus("verified");
				else setStatus("notVerified");
			})
			.catch(error => {
				setStatus("error");
			});
	}
	async giveMeThePollWithId(id, setText, setCanVote, status) {
		let data = {};
		data = await this.db
			.collection("polls")
			.doc(id)
			.get()
			.then(doc => {
				if (doc.exists) {
					return doc.data();
				}
			})
			.catch(error => {
				console.log(error);
				return { question: "Invalid ID or Error Ocured", error };
			});
		if (status === "question") {
			setText(data.question);
			setCanVote(true);
		} else
			setText(
				`Yes : ${((data.yes / (data.yes + data.no)) * 100).toFixed(
					1
				)}% No : ${((data.no / (data.yes + data.no)) * 100).toFixed(
					1
				)}%`
			);
		return data;
	}
}

export default Firebase;
