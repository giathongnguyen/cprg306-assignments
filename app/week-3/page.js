import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="m-3">
            <h1 className="text-3xl font-bold">Shopping List</h1>
            <ItemList />
        </main>
    );
}