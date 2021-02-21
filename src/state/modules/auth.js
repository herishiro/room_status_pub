import { auth } from "@/main";
import * as firebase from "firebase/app";

export default {
	namespaced: true,
	state: {
		userState: "",
	},
	actions: {
		async login(context, { email, password }) {
			try {
				await firebase.auth().signInWithEmailAndPassword(email, password);
				return {
					type: "success",
					message: "ログインしました",
				};
			} catch (error) {
				return {
					type: "error",
					message: error,
				};
			}
		},
		async logout() {
			try {
				await firebase.auth().signOut();
				return {
					type: "success",
					message: "ログアウトしました",
				};
			} catch (error) {
				return {
					type: "error",
					message: error,
				};
			}
		},
		async listenUserState({ commit }) {
			try {
				await auth.onAuthStateChanged((user) => {
					commit("LISTEN_USERSTATE", user);
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
	mutations: {
		LISTEN_USERSTATE(state, user) {
			if (user) {
				state.userState = true;
				this.dispatch("roomdata/listenData");
				this.dispatch("userdata/listenData", user);
			} else {
				state.userState = false;
				this.state.roomdata.rooms = [];
				this.state.userdata.accessingUser = "";
			}
		},
	},
};
