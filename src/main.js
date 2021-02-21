import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./state/store";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

Vue.config.productionTip = false;

firebase.initializeApp({
	apiKey: "XXXXXXXXXXXXXXXXXXXXXX",
	authDomain: "XXXXXXXXXXXXXXXXXXXXXX",
	projectId: "XXXXXXXXXXXXXXXXXXXXXX",
	storageBucket: "XXXXXXXXXXXXXXXXXXXXXX",
	messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXX",
	appId: "XXXXXXXXXXXXXXXXXXXXXX",
});
export const db = firebase.firestore();
export const auth = firebase.auth();

new Vue({
	vuetify,
	store,
	render: (h) => h(App),
}).$mount("#app");
