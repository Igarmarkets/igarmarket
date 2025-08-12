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

// Firma esperada por el resto del código: (path, file)
export async function uploadPublicImage(
  path: string,
  data: Blob | Uint8Array | ArrayBuffer,
  metadata?: UploadMetadata
): Promise<string> {
  const r = ref(storage, path)
  await uploadBytes(r, data, metadata)
  return await getDownloadURL(r)
}
