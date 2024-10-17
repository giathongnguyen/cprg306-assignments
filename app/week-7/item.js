
export default function Item({ name, quantity, category }) {
    return (
        <section className="m-4 p-2 bg-slate-500 w-96">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>Buy {quantity} in {category}</p>
        </section>
    );
}