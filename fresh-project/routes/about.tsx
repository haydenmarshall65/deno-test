import { Handlers } from "$fresh/server.ts"
import GetUuid from "../islands/GetUuid.tsx"
import { useSignal } from "@preact/signals";

export const handler: Handlers = {
    GET(_req, ctx) {
        return ctx.render()
    }
}

export default function AboutPage() {
    const uuid = useSignal('');
    return (
        <main>
            <div className="flex flex-row justify-start px-8 py-4 bg-blue-800">
                <h1 className="text-white">Blog for Dogs</h1>
            </div>
            <h1>About Page</h1>
            <p>This is the About page.</p>
            <GetUuid uuid={uuid} />
        </main>
    )
}