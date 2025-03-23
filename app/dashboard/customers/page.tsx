import Table from "@/app/ui/customers/table";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  console.log(query);
  return (
    <div>
      <Table customers={[]} query={query}/>
    </div>
  );
}
