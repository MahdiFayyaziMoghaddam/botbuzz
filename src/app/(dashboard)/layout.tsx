import { ReactNode } from "react";
import Provider from "./_provider";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return <Provider>{children}</Provider>;
}
