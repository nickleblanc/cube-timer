interface ScrambleProps {
  scramble: string;
}

export default function Scramble({ scramble }: ScrambleProps) {
  return (
    <div className="flex justify-center p-6 font-mono text-xl font-bold">
      {scramble}
    </div>
  );
}
