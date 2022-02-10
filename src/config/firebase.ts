import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAKuQdcPPA3DqmCg8B1ZfaeYPe_QfWRo7k',
  authDomain: 'dareit-mentorproject.firebaseapp.com',
  projectId: 'dareit-mentorproject',
  storageBucket: 'dareit-mentorproject.appspot.com',
  messagingSenderId: '804418320014',
  appId: '1:804418320014:web:22cb2af2776f1a9bd97bdf',
  measurementId: 'G-18SMM5LL6S',
};

export const app = initializeApp(firebaseConfig);
