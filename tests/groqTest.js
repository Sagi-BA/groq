// Run the following command to install Jest:
// npm install --save-dev jest
// npx jest

require('dotenv').config();
const mygroq = new (require('./src/groqManager'));

it('returns false for empty MAX_TOKENS environment variable', async () => {
  const result = await mygroq.sendPrompt('test prompt', { maxTokens: '' });
  expect(result).toBe(false);
});

it('returns false for non-numeric MAX_TOKENS environment variable', async () => {
  const result = await mygroq.sendPrompt('test prompt', { maxTokens: 'invalid' });
  expect(result).toBe(false);
});

it('returns false for negative MAX_TOKENS environment variable', async () => {
  const result = await mygroq.sendPrompt('test prompt', { maxTokens: '-10' });
  expect(result).toBe(false);
});

it('returns false for MAX_TOKENS environment variable less than 1', async () => {
  const result = await mygroq.sendPrompt('test prompt', { maxTokens: '0.5' });
  expect(result).toBe(false);
});

it('returns false for MAX_TOKENS environment variable with leading or trailing whitespace', async () => {
  const result = await mygroq.sendPrompt('test prompt', { maxTokens: ' 10  ' });
  expect(result).toBe(false);
});