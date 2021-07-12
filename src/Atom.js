
import { atom} from 'recoil'
import { recoilPersist } from 'recoil-persist'


const { persistAtom } = recoilPersist({
    key: 'recoil-persist-sample-app-123', // this key is using to store data in local storage make it unique
    storage: localStorage,  // configurate which stroage will be used to store the data
  })

const counterState = atom({
    key: 'count',
    default: 0,
    effects_UNSTABLE: [persistAtom],
  })



  export  { counterState }