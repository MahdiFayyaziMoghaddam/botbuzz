import { ReactNode } from "react";
import Provider from "./_provider";
import "./styles.css";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return <Provider>{children}</Provider>;
}
