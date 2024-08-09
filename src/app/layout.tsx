"use client";
import "./globals.css";
import Header  from "@/components/Header";
import { PrivateRoute } from "@/components/PrivateRoute";
import { AppWrapper } from "@/context/auth";
import { checkIsPublicRoute } from "@/utils/checkIsPublicRoute";
import { usePathname } from "next/navigation";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isPublicPage = checkIsPublicRoute(pathname!);

	return (
		<html lang="en">
			<AppWrapper>
				<body>
					<Header />
					{isPublicPage && children}
					{!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
				</body>
			</AppWrapper>
		</html>
	);
}
