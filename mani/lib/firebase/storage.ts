// web/lib/firebase/storage.ts
import app from './init'
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  type UploadMetadata,
} from 'firebase/storage'

export const storage = getStorage(app)
export default storage

// Subida sencilla y devuelve URL pública de descarga
export async function uploadPublicImage(
  data: Blob | Uint8Array | ArrayBuffer,
  path: string,
  metadata?: UploadMetadata
): Promise<string> {
  const r = ref(storage, path)
  await uploadBytes(r, data, metadata)
  const url = await getDownloadURL(r)
  return url
}
