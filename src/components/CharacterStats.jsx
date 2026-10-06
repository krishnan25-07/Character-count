function CharacterStats({ text }) {
  const count = text.length;

  return (
    <div className="stats-box">
      <p>Character Count: {count}</p>

      {count > 100 && (
        <p className="warning">
          ⚠ Warning: Character Limit exceeded!
        </p>
      )}
    </div>
  );
}

export default CharacterStats;