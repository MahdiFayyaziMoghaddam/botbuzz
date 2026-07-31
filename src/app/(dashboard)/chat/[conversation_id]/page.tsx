import Client from "./_client";

export const generateMetadata = () => {
	return { title: "Chat" };
};

export default async function ChatSession({ params }: { params: Promise<{ conversation_id: string }> }) {
	const { conversation_id } = await params;
	return <Client conversation_id={conversation_id} />;
}
