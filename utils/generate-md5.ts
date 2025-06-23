// utils/md5Signature.ts
import crypto from 'crypto'

export function generateMD5Signature(data: string) {
  return crypto.createHash('md5').update(data).digest('hex')
}
