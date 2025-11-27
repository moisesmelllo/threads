import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import CommunityCard from "@/components/cards/CommunityCard";
import { fetchCommunities } from "@/lib/actions/community.actions";
import Link from "next/link";

async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const result = await fetchCommunities({
    searchString: "",
    pageNumber: 1,
    pageSize: 25,
    sortBy: "desc",
  });

  return (
    <section>
      {/* Adicionei um flex container para alinhar o título e o botão */}
      <div className="flex flex-row justify-between items-center mb-10">
        <h1 className="head-text">Communities</h1>

        {/* Botão de Criar Comunidade */}
        <Link href="/communities/create">
          <button className="bg-primary-500 hover:bg-primary-500/80 text-light-1 font-bold py-2 px-4 rounded-lg text-small-regular">
            Create Community
          </button>
        </Link>
      </div>

      <div className="mt-14 flex flex-col gap-9">
        {result.communities.length === 0 ? (
          <p className="no-result">No Communities</p>
        ) : (
          <>
            {result.communities.map((community) => (
              <CommunityCard
                key={community.id}
                id={community.id}
                name={community.name}
                username={community.username}
                imgUrl={community.image}
                bio={community.bio}
                members={community.members}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default Page;
