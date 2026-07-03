import { useState } from 'react';
import { processUserInput } from '../api/client.js';

export default function UserInput() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await processUserInput(input);
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="user-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Entrez votre texte..."
          disabled={loading}
        />
        <button type="submit" disabled={loading || input.trim() === ''}>
          {loading ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>

      {result && (
        <div className="result">
          <strong>Résultat :</strong> {result.result}
          <br />
          <small>Traité le {new Date(result.processedAt).toLocaleString('fr-FR')}</small>
        </div>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
}
