/**
 * WhatsApp & Phone utilities for Syed Shah Laptop Zone
 * Primary contact: 03296918835 (PK standard +923296918835)
 */

export const STORE_PHONE_DISPLAY = '03296918835';
export const STORE_PHONE_TEL = 'tel:03296918835';
export const STORE_WHATSAPP_NUMBER = '923296918835';

/**
 * Generates a pre-filled WhatsApp URL for a specific product
 */
export function getProductWhatsAppUrl(productName: string, specsSummary?: string): string {
  let message = `Assalam-o-Alaikum, I am interested in ${productName}.`;
  if (specsSummary) {
    message += ` (${specsSummary})`;
  }
  message += ` Please share the current price and availability.`;
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a general WhatsApp inquiry URL
 */
export function getGeneralWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || `Assalam-o-Alaikum Syed Shah Laptop Zone, I would like to inquire about available laptops and smartphones.`;
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a custom device trade-in or quotation request
 */
export function getQuotationWhatsAppUrl(name: string, deviceType: string, budgetOrModel: string, details: string): string {
  const message = `Assalam-o-Alaikum Syed Shah Laptop Zone,\n\nName: ${name}\nDevice Interest: ${deviceType}\nTarget Model / Budget: ${budgetOrModel}\nDetails / Requirement: ${details}\n\nPlease share suitable options and current availability.`;
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
