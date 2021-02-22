// import { db, auth } from "@/main";
import { db } from "@/main";
export default {
	namespaced: true,
	state: {
		accessingUser: "",
	},
	actions: {
		async listenData({ commit }, user) {
			try {
				const doc = await db
					.collection("users")
					.doc(user.uid)
					.get();
				const accessingUser = doc.data().userName;
				commit("GET_USER_NAME", accessingUser);
			} catch (error) {
				console.log(error.message);
			}
		},
		async addUser() {
			// サインアップ機能をコメントアウトしています
			// async addUser(context, { email, password, userName }) {
			// try {
			// const cred = await auth.createUserWithEmailAndPassword(email, password);
			// await db
			// 	.collection("users")
			// 	.doc(cred.user.uid)
			// 	.set({
			// 		userName: userName,
			// 	});
			return {
				type: "success",
				message:
					"新規ユーザーが登録されました！\n (デモのため実際には登録されていません)",
			};
			// } catch (error) {
			// 	return {
			// 		type: "error",
			// 		message: error,
			// 	};
			// }
		},
	},
	mutations: {
		GET_USER_NAME(state, accessingUser) {
			state.accessingUser = accessingUser;
		},
	},
};
