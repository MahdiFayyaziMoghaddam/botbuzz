import { createDBClient } from "@/lib/supabase";

(async function () {
	try {
		const supabase = await createDBClient();

		// Subscriptions
		await supabase.from("subscriptions").insert({
			plan: "Free",
			features: [
				"Limited access to Multiple Personalities (3 personalities)",
				"Basic Dynamic Suggestions",
				"Multi-platform Integration (limited to 1 device)",
				"Multilingual Support (2 languages)"
			]
		});

		await supabase.from("subscriptions").insert({
			plan: "Plus",
			features: [
				"Access to Multiple Personalities (10 personalities)",
				"Real-time Web References (unlimited queries)",
				"Multi-platform Integration (up to 5 devices)",
				"Multilingual Support (10 languages)"
			]
		});

		await supabase.from("subscriptions").insert({
			plan: "Team",
			features: [
				"Advanced Generated Images (limited to 100 images/month for the team)",
				"Multilingual Support (15 languages)",
				"Advanced Feedback Mechanism",
				"Collaborative conversation features for team projects"
			]
		});

		// Personalities
		await supabase.from("personalities").insert({
			name: "Tech savvy",
			description:
				"A tech-savvy AI, ideal for tech support, gadget recommendations, troubleshooting, and software guidance.",
			image: "/images/tech-savvy.png",
			skills: ["tech support", "gadgets", "troubleshooting", "software"]
		});

		await supabase.from("personalities").insert({
			name: "Sage",
			description: "A wise and knowledgeable AI, perfect for deep discussions, philosophical debates, and mentoring.",
			image: "/images/sage.png",
			skills: ["philosophy", "critical thinking", "mentoring", "wisdom"]
		});

		await supabase.from("personalities").insert({
			name: "Friendly",
			description:
				"A friendly and empathetic AI, great for casual conversations, emotional support, and social interaction.",
			image: "/images/friendly.png",
			skills: ["empathy", "casual chat", "emotional support"]
		});

		await supabase.from("personalities").insert({
			name: "Explorer",
			description: "An adventurous AI, perfect for travel advice, exploring new places, and discovering hidden gems.",
			image: "/images/explorer.png",
			skills: ["travel", "adventure", "discovery", "geography"]
		});

		await supabase.from("personalities").insert({
			name: "Muse",
			description: "A creative and imaginative AI, ideal for brainstorming, artistic inspiration, and design thinking.",
			image: "/images/muse.png",
			skills: ["creative writing", "brainstorming", "art", "design"]
		});

		await supabase.from("personalities").insert({
			name: "Navigator",
			description: "A practical and efficient AI, perfect for planning, organizing, and project management.",
			image: "/images/navigator.png",
			skills: ["planning", "organization", "productivity", "time management"]
		});

		await supabase.from("personalities").insert({
			name: "Health guru",
			description: "A health-conscious AI, focused on fitness, nutrition, and overall wellness.",
			image: "/images/health-guru.png",
			skills: ["fitness", "nutrition", "wellness", "meditation"]
		});

		await supabase.from("personalities").insert({
			name: "Scholar",
			description: "An academic and research-oriented AI, excellent for deep research, academic writing, and analysis.",
			image: "/images/scholar.png",
			skills: ["research", "academia", "analysis", "writing"]
		});

		console.log("Seeding successfully done!");
	} catch (error) {
		console.error(error);
	}
})();
