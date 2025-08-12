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

// (path, file) -> url pública
export async function uploadPublicImage(
  path: string,
  data: Blob | Uint8Array | ArrayBuffer,
  metadata?: UploadMetadata
): Promise<string> {
  const r = ref(storage, path)
  await uploadBytes(r, data, metadata)
  return await getDownloadURL(r)
}

// (path, file) -> url (el acceso lo controlan las reglas de Storage)
export async function uploadPrivateImage(
  path: string,
  data: Blob | Uint8Array | ArrayBuffer,
  metadata?: UploadMetadata
): Promise<string> {
  const r = ref(storage, path)
  await uploadBytes(r, data, metadata)
  return await getDownloadURL(r)
}
