import ItemList from './item-list.js';

export default function Page() {
    return (
        <main className="m-3">
            <h1 className="text-3xl font-bold m-3">Shopping List</h1>
            <ItemList />
        </main>
    );
}