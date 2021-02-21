import { db } from "@/main";
export default {
	namespaced: true,
	state: {
		rooms: [],
	},
	getters: {
		lastIndex: (state) => {
			if (!state.rooms.length) {
				return 0;
			}
			let lastRoom = state.rooms.reduce((prev, current) => {
				return prev.index > current.index ? prev : current;
			}, 0);
			return lastRoom.index;
		},
	},
	actions: {
		async listenData({ commit }) {
			try {
				await db
					.collection("rooms")
					.orderBy("index")
					.onSnapshot((snapshot) => {
						let changes = snapshot.docChanges();
						commit("LISTEN_DB", changes);
					});
			} catch (error) {
				console.log(error);
			}
		},
		async addRoom({ getters }, roomName) {
			try {
				await db.collection("rooms").add({
					isOccupied: false,
					name: roomName,
					user: null,
					index: getters.lastIndex + 1,
				});
				return {
					type: "success",
					message: "部屋が追加されました！",
				};
			} catch (error) {
				return {
					type: "error",
					message: error,
				};
			}
		},
		async deleteRoom(context, roomId) {
			try {
				db.collection("rooms")
					.doc(roomId)
					.delete();
				return {
					type: "success",
					message: "部屋が削除されました",
				};
			} catch (error) {
				return {
					type: "error",
					message: error,
				};
			}
		},
		async updateRoom(context, { roomId, status }) {
			try {
				db.collection("rooms")
					.doc(roomId)
					.update({
						isOccupied: !status,
						user: this.state.userdata.accessingUser,
					});
				return {
					type: "success",
					message: "部屋の状態が更新されました",
				};
			} catch (error) {
				return {
					type: "error",
					message: error,
				};
			}
		},
	},
	mutations: {
		LISTEN_DB(state, changes) {
			changes.forEach((change) => {
				const changedRoomData = change.doc.data();
				const isExistRoom = state.rooms.find((room) => {
					return room.id === change.doc.id;
				});
				switch (change.type) {
					case "added":
						if (!isExistRoom) {
							changedRoomData.id = change.doc.id;
							state.rooms.push(changedRoomData);
						}
						break;
					case "modified":
						state.rooms = state.rooms.map((room) => {
							if (room.id === change.doc.id) {
								changedRoomData.id = change.doc.id;
								return changedRoomData;
							}
							return room;
						});
						break;
					case "removed":
						state.rooms = state.rooms.filter((room) => {
							return room.id !== change.doc.id;
						});
						break;
				}
			});
		},
	},
};
