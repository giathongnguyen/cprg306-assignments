export default function Item({ name, quantity, category, onSelect }) {
    return (
        <section className="m-4 p-2 bg-slate-500 w-96 hover:bg-blue-300 cursor-pointer" onClick={onSelect}>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>Buy {quantity} in {category}</p>
        </section>
    );
}