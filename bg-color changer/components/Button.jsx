export function Button({ color, hash, state }) {
  return (
    <div>
      <button
        style={{ backgroundColor: hash }}
        className={`px-8 cursor-pointer py-2 rounded-2xl text-amber-50`}
        onClick={() => {
          state(hash);
        }}
      >
        {color}
      </button>
    </div>
  );
}
