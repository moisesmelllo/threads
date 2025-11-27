import { CreateOrganization } from "@clerk/nextjs";

export default function Page() {
  return (
    <section>
      <h1 className="head-text mb-10">Create Community</h1>

      <div className="flex justify-center">
        {/* Este componente renderiza o formulário completo e seguro */}
        <CreateOrganization afterCreateOrganizationUrl="/communities" />
      </div>
    </section>
  );
}
