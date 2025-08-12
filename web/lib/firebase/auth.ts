// web/lib/firebase/auth.ts
import app from './init'
import { getAuth, type Auth } from 'firebase/auth'

const authInstance = getAuth(app)

// Named export (algunos archivos usan: import { getFirebaseAuth } from './auth')
export function getFirebaseAuth(): Auth {
  return authInstance
}

// También dejamos exports habituales
export const auth = authInstance
export default authInstance
