const config = {
    apiKey: "AIzaSyCcs6PflOGmzaza62NRa9sMVec0rv7oa3M",
    authDomain: "chat-49afc.firebaseapp.com",
    databaseURL: "https://chat-49afc.firebaseio.com",
    projectId: "chat-49afc",
    storageBucket: "chat-49afc.appspot.com",
    messagingSenderId: "628239557437",
    appId: "1:628239557437:web:e0bbd009301f9ccc2e1b54",
    measurementId: "G-PVBX3M76NH"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings( { timestampsInSnapshots: true });

  export default firebaseApp.firestore();