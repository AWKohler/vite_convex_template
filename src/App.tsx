function App() {
  return (
    <div className="flex min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-lg font-semibold text-gray-900">
              Vite + Tailwind + Convex template
            </p>
            <p className="text-sm text-gray-500">
              Build your app with Convex realtime data and serverless functions.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-gray-800">Frontend</p>
            <p className="mt-2 text-sm text-gray-600">
              React, Vite, Tailwind, and shadcn/ui are prewired. Add routes,
              components, and state as usual.
            </p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-gray-800">Backend (Convex)</p>
            <p className="mt-2 text-sm text-gray-600">
              The Convex client is mounted. Use `convex/` for your schema and
              server functions, then call them with `useQuery` / `useMutation`.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
