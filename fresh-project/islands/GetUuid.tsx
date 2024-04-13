import type { Signal } from "@preact/signals";

interface DataProps {
    uuid: Signal<string>
}

export default function GetUuid( props: DataProps ) {
    return (
        <div>
            <button className="bg-black text-white border border-2-orange-500 px-4 py-2" onClick={() => getUuid()}>Random UUID</button>
            <p>{props.uuid.value ?? 'No UUID'}</p>
        </div>
    );
    async function getUuid() {
        const resp = await fetch('/random-uuid').then(r => r.json()).then(r => props.uuid.value = r);
    }
}