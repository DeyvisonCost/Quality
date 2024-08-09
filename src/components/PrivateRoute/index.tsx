import { APP_ROUTES } from "@/constants/app-routes";
import { checkUserAuthenticated } from "@/utils/checkUserAuthenticated";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect } from "react";
import { Props } from "./types";

export const PrivateRoute = ({ children }: Props) => {
	const { push } = useRouter();

	const isAuthenticated = checkUserAuthenticated();

	useEffect(() => {
		if (!isAuthenticated) {
			push(APP_ROUTES.public.login);
		}
	}, [push, isAuthenticated]);

	return (
		<Fragment>
			{!isAuthenticated && null}
			{isAuthenticated && children}
		</Fragment>
	);
};
