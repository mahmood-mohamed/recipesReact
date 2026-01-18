// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
);

export default function AlphabetFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
        {letters.map((letter) => (
            <button
                key={letter}
                onClick={() => onChange(letter)}
                className={`
                    w-9 h-9 rounded-full text-sm font-semibold
                    transition
                    ${
                        active === letter
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 hover:text-white"
                    }
                    aria-current={active === letter ? "true" : undefined}
                `}
            >
                {letter}
            </button>
        ))}
    </div>
  )
}

