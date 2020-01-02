<template>
  <div>
    <button @click="googleSignIn">
      Google Sign In
    </button>
    <div>Current user is {{ user }} and the ID is {{ userID }}</div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: "",
      userID: ""
    };
  },
  methods: {
    googleSignIn() {
      this.provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(this.provider)
        .then(result => {
          // store the user or wathever
          this.user = result.user.displayName;
          this.userID = result.user.uid;
        })
        .catch(e => {});
    }
  }
};
</script>

<style scoped></style>
