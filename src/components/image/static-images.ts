import Sage from "@/assets/sage.png";
import Scholar from "@/assets/scholar.png";
import Explorer from "@/assets/explorer.png";
import Friendly from "@/assets/friendly.png";
import Savvy from "@/assets/tech-savvy.png";
import Muse from "@/assets/muse.png";
import Navigator from "@/assets/navigator.png";
import HealthGuru from "@/assets/health-guru.png";
import Default from "@/assets/default.png";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";

export const staticImages: Record<string, StaticImport> & { default: StaticImport } = {
	"/images/sage.png": Sage,
	"/images/scholar.png": Scholar,
	"/images/explorer.png": Explorer,
	"/images/friendly.png": Friendly,
	"/images/tech-savvy.png": Savvy,
	"/images/muse.png": Muse,
	"/images/navigator.png": Navigator,
	"/images/health-guru.png": HealthGuru,
	default: Default
};
