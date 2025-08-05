// Utility to generate SHA-256 hash for Vajrosuper:super@2025
async function hashCredentials(username, password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(username + ':' + password);
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}
(async () => {
  const hash = await hashCredentials('Vajrosuper', 'super@2025');
  console.log('Hash:', hash);
})();
