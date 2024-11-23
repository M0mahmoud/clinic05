async function DetailsService({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    return (
        <div className="px-3  sm:px-28 ">
            <h1>Service Page - {id}</h1>
        </div>
    );
}

export default DetailsService;
