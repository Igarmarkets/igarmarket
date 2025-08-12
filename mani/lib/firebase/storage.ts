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

function toMetadata(meta?: UploadMetadata | string): UploadMetadata | undefined {
  if (!meta) return undefined
  if (typeof meta === 'string') {
    // si nos pasan un nombre de archivo como string
    return { customMetadata: { fileName: meta } }
  }
  return meta
}

// Firma esperada por el resto del código: (path, file, [meta])
export async function uploadPublicImage(
  path: string,
  data: Blob | Uint8Array | ArrayBuffer,
  metadata?: UploadMetadata | string
): Promise<string> {
  const r = ref(storage, path)
  await uploadBytes(r, data, toMetadata(metadata))
  return await getDownloadURL(r)
}

export async function uploadPrivateImage(
  path: string,
  data: Blob | Uint8Array | ArrayBuffer,
  metadata?: UploadMetadata | string
): Promise<string> {
  const r = ref(storage, path)
  await uploadBytes(r, data, toMetadata(metadata))
  return await getDownloadURL(r)
}
