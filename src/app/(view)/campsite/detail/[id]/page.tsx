import CampsiteDetail from "@/components/CampsiteDetai";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div>
      <CampsiteDetail id={id} />
    </div>
  );
}
