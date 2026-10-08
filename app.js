const form = document.querySelector('#enquiry');
const mode = document.querySelector('#mode');
let token = '';
let latest = '';
const configReady = fetch('/api/config').then(r => {
  if (!r.ok) throw new Error('Could not connect to the local server.');
  return r.json();
}).then(config => {
  token = config.token;
  mode.querySelector('[value="claude"]').disabled = !config.claude_available;
  if (!config.claude_available) document.querySelector('#mode-note').textContent = 'Demo creates a template brief. Claude mode becomes available when the server has an API key and model configured.';
}).catch(() => {
  document.querySelector('#mode-note').textContent = 'Run python server.py and open http://127.0.0.1:8000 to use this prototype.';
  document.querySelector('#generate').disabled = true;
});
mode.addEventListener('change', () => {
  document.querySelector('#mode-note').textContent = mode.value === 'claude'
    ? 'Sends the entered fields to Anthropic. Each request consumes API credits.'
    : 'Demo creates a template brief without sending data to an AI service.';
});
document.querySelector('#sample').addEventListener('click', () => {
  const sample = {service:'Modular kitchen', location:'Tilkamanjhi, Bhagalpur', dimensions:'Approx. 10 × 8 ft; not site verified', budget:'₹1.5–2 lakh', requirements:'Fictional example: L-shaped kitchen, easy-clean finishes, a pantry cabinet and space for a refrigerator. Materials and installation timeline are undecided.'};
  for (const [key, value] of Object.entries(sample)) form.elements[key].value = value;
});
form.addEventListener('submit', async event => {
  event.preventDefault();
  const button = document.querySelector('#generate');
  const error = document.querySelector('#error');
  error.hidden = true;
  document.querySelector('#brief').hidden = true;
  document.querySelector('#download').hidden = true;
  latest = '';
  document.querySelector('#empty').hidden = false;
  button.disabled = true;
  button.textContent = 'Preparing brief…';
  try {
    await configReady;
    if (!token) throw new Error('Restart the local server and refresh this page.');
    const data = Object.fromEntries(new FormData(form));
    const response = await fetch('/api/brief', {method:'POST', headers:{'Content-Type':'application/json','X-Prototype-Token':token}, body:JSON.stringify(data)});
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Unable to prepare the brief.');
    latest = `${result.mode === 'claude' ? 'Claude API output' : 'Demo template — no AI request'}\nFor designer review; not a quotation.\n\n${result.brief}`;
    document.querySelector('#brief').textContent = result.brief;
    document.querySelector('#brief').hidden = false;
    document.querySelector('#empty').hidden = true;
    document.querySelector('#download').hidden = false;
    document.querySelector('#result-label').textContent = result.mode === 'claude' ? 'Claude API output · review before use' : 'Demo template · no AI request';
  } catch (e) {
    error.textContent = e.message;
    error.hidden = false;
  } finally {
    button.disabled = false;
    button.textContent = 'Prepare project brief ↗';
  }
});
document.querySelector('#download').addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob([latest], {type:'text/plain;charset=utf-8'}));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'myhome-project-brief.txt';
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
