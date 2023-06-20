import { Routes, Route } from "react-router";

import { Layout } from "components/Layout";
import { Test } from "pages/Test";

export const Routing = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={"/"} element={<Test />} />
				<Route path={"/products"} element={<Test />} />
				<Route path={"/categories"} element={<Test />} />
				<Route path={"/brands"} element={<Test />} />
				<Route path={"/colors"} element={<Test />} />
				<Route path={"/users"} element={<Test />} />
				<Route path={"/orders"} element={<Test />} />
			</Route>
		</Routes>
	);
};