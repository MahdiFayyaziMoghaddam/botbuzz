export default async function Session({ params }: { params: Promise<{ chatID: string }> }) {
	console.log(await params);
	return <div></div>;
}
