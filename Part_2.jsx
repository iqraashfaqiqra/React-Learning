// FireBase
// FireBase is online platform Where website base data,android data store.
// ...............
//Website
/*
.open Firebase->go to console ->create project-> </> ->Register App -> Copy Sdk.
.create react project folder on computer->npm install firebase .
.create Firebaseconfig.jsx and paste copy Sdk  and export app.
.RealTime databas->copy URL
.go to Paste Sdk in firebaseconfig.jsx and {databaseURL:"paste URL"}
.index.jsx
    import {getDatebase,ref,set} from 'firebase/database';
    import app from './firebase'

    const db=getDatabase(app);
    const fun=()=>
    {
        set(ref(db,"user/push"),{
        id:1,
        name:"iqra",
        age:20
                                })
    }
   return(
   <>
   <button oncLick={fun}>Save</button>
   </>
   )
*/