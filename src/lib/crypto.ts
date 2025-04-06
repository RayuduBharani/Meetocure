import crypto from 'node:crypto'

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12; // Recommended for GCM
const ENCRYPTION_KEY = process.env.ENCRYPTION_SECRET;

if (!ENCRYPTION_KEY || ENCRYPTION_KEY.length !== 32) {
  throw new Error("ENCRYPTION_SECRET must be defined and 32 characters long.");
}

export function encryptPhone(phone: string): string {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(ENCRYPTION_KEY as string), iv);

  let encrypted = cipher.update(phone, "utf8", "hex");
  encrypted += cipher.final("hex");

  const authTag = cipher.getAuthTag();

  // Format: iv:authTag:encryptedText (all hex)
  return `${iv.toString("hex")}:${authTag.toString("hex")}:${encrypted}`;
}

export function decryptPhone(encryptedData: string): string {
  const [ivHex, authTagHex, encryptedText] = encryptedData.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const authTag = Buffer.from(authTagHex, "hex");

  const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(ENCRYPTION_KEY as string), iv);
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}