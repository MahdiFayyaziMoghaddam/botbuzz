import { createDBClient } from "@/lib/supabase";

const SEED_DATA = {
	subscriptions: [
		{
			plan: "Free",
			features: [
				"Limited access to Multiple Personalities (3 personalities)",
				"Basic Dynamic Suggestions",
				"Multi-platform Integration (limited to 1 device)",
				"Multilingual Support (2 languages)"
			]
		},
		{
			plan: "Plus",
			features: [
				"Access to Multiple Personalities (10 personalities)",
				"Real-time Web References (unlimited queries)",
				"Multi-platform Integration (up to 5 devices)",
				"Multilingual Support (10 languages)"
			]
		},
		{
			plan: "Team",
			features: [
				"Advanced Generated Images (limited to 100 images/month for the team)",
				"Multilingual Support (15 languages)",
				"Advanced Feedback Mechanism",
				"Collaborative conversation features for team projects"
			]
		}
	],
	personalities: [
		{
			name: "Tech Savvy",
			description:
				"A tech-savvy AI, ideal for tech support, gadget recommendations, troubleshooting, and software guidance.",
			image: "/images/tech-savvy.png",
			skills: ["tech support", "gadgets", "troubleshooting", "software"]
		},
		{
			name: "Sage",
			description: "A wise and knowledgeable AI, perfect for deep discussions, philosophical debates, and mentoring.",
			image: "/images/sage.png",
			skills: ["philosophy", "critical thinking", "mentoring", "wisdom"]
		},
		{
			name: "Friendly",
			description:
				"A friendly and empathetic AI, great for casual conversations, emotional support, and social interaction.",
			image: "/images/friendly.png",
			skills: ["empathy", "casual chat", "emotional support"]
		},
		{
			name: "Explorer",
			description: "An adventurous AI, perfect for travel advice, exploring new places, and discovering hidden gems.",
			image: "/images/explorer.png",
			skills: ["travel", "adventure", "discovery", "geography"]
		},
		{
			name: "Muse",
			description: "A creative and imaginative AI, ideal for brainstorming, artistic inspiration, and design thinking.",
			image: "/images/muse.png",
			skills: ["creative writing", "brainstorming", "art", "design"]
		},
		{
			name: "Navigator",
			description: "A practical and efficient AI, perfect for planning, organizing, and project management.",
			image: "/images/navigator.png",
			skills: ["planning", "organization", "productivity", "time management"]
		},
		{
			name: "Health Guru",
			description: "A health-conscious AI, focused on fitness, nutrition, and overall wellness.",
			image: "/images/health-guru.png",
			skills: ["fitness", "nutrition", "wellness", "meditation"]
		},
		{
			name: "Scholar",
			description: "An academic and research-oriented AI, excellent for deep research, academic writing, and analysis.",
			image: "/images/scholar.png",
			skills: ["research", "academia", "analysis", "writing"]
		}
	]
};

async function seedDatabase() {
	const supabase = await createDBClient();

	const { error: subscriptionError } = await supabase.from("subscriptions").insert(SEED_DATA.subscriptions);

	if (subscriptionError) throw subscriptionError;

	const { error: personalityError } = await supabase.from("personalities").insert(SEED_DATA.personalities);

	if (personalityError) throw personalityError;

	console.log("Seeding successfully done!");
}

seedDatabase().catch((error) => {
	console.error("Failed to seed database:", error);
	process.exit(1);
});
