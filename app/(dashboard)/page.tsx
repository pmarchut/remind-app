import CollectionCard from "@/components/CollectionCard";
import CreateCollectionBtn from "@/components/CreateCollectionBtn";
import SadFace from "@/components/icons/SadFace";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack";
import { Suspense } from "react";

export default function Home() {
  return(
    <>
      <Suspense fallback={<WelcomeMsgFallback />}>
        <WelcomeMsg />
      </Suspense>
      <Suspense fallback={<div>Loading collections...</div>}>
        <CollectionList />
      </Suspense>
    </>
  )
}

async function WelcomeMsg() {
  const user = await stackServerApp.getUser();

  if (!user) {
    return <div>Please sign in to access the application.</div>;
  }

  return (
    <div className="flex w-full mb-12">
      <h1 className="text-4xl font-bold">
        Welcome, <br /> {user.displayName}
      </h1>
    </div>
  );
}

function WelcomeMsgFallback() {
  return (
    <div className="flex w-full mb-12">
      <h1 className="text-4xl font-bold">
        <Skeleton className="w-[180px] h-[36px]" />
        <Skeleton className="w-[150px] h-[36px]" />
      </h1>
    </div>
  );
}

async function CollectionList() {
  const user = await stackServerApp.getUser();
  const collections = await prisma.collection.findMany({
    include: {
      tasks: true, // Include tasks if needed, or remove this line if not required
    },
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  if (collections.length === 0) {
    return (
      <div className="flex flex-col gap-5">
        <Alert>
          <SadFace />
          <AlertTitle>There are no collections yet!</AlertTitle>
          <AlertDescription>Create a collection to get started</AlertDescription>
        </Alert>
        <CreateCollectionBtn />
      </div>
    );
  }

  return (
    <>
      <CreateCollectionBtn />
      <div className="flex flex-col gap-4 mt-4">
        {collections.map((collection) => (
          <CollectionCard 
            key={collection.id}
            collection={collection}
          />
        ))}
      </div>
    </>
  );
}
