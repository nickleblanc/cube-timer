import { Modal } from "@/components/modal";

interface ParamsProps {
  params: {
    id: string;
  };
}

export default function Solve({ params: { id } }: ParamsProps) {
  return (
    <Modal
      id={id}
      backButton={false}
      solvePage={true}
    />
  );
}
