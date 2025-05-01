import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Time } from "./utils/time";
import { createBrowserRouter, RouterProvider } from "react-router";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Time.Hours,
		},
	},
});

const router = createBrowserRouter([
	{
		path: "",
		// Component: AuthLayout,
		children: [
			{
				// path: APP_PATHS.HOME,
				// element: <HomeV2 />,
			},
		],
	},
]);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
