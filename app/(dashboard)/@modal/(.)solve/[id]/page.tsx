import { Modal } from "@/components/modal";

interface ParamsProps {
  params: {
    id: string;
  };
}

export default function Page({ params: { id } }: ParamsProps) {
  return (
    <Modal
      id={id}
      backButton
      solvePage={false}
    />
  );
}
