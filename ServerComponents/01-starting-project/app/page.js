import { Suspense } from "react";
import UsePromiseDemo from "./components/UsePromisesDemo";
import fs from "node:fs/promises";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve) =>
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      resolve(users);
    }, 5000)
  );
  return (
    <main>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <UsePromiseDemo fetchUsers={fetchUsersPromise}></UsePromiseDemo>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
