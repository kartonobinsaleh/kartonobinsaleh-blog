type Props = {
    items: string[]
}

export default function References({ items }: Props) {
    return (
        <section>
            <h2>Referensi</h2>
            <ul>
                {items.map((ref, i) => (
                    <li key={i}>{ref}</li>
                ))}
            </ul>
        </section>
    )
}