export default async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert('copied to clipboard');
  } catch (error) {
    console.error(error);
  }
}
