import { Outlet, createRootRouteWithContext, HeadContent, Scripts, useRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { useAuth, type AuthState } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";


import appCss from "../styles.css?url";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
      retry: 1,
    },
  },
});

interface RouterContext {
  auth: AuthState;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  beforeLoad: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    return {
      auth: {
        isAuthenticated: !!session,
        user: session?.user ?? null,
        session,
        isLoading: false,
      } as AuthState,
    };
  },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DriveOS — Operating system for automotive businesses" },
      { name: "description", content: "Run inventory, leads, sales, workshop, and finance from one dashboard. Built for dealerships in Malaysia and Singapore." },
      { name: "author", content: "DriveOS" },
      { property: "og:title", content: "DriveOS — Operating system for automotive businesses" },
      { property: "og:description", content: "Run inventory, leads, sales, workshop, and finance from one dashboard. Built for dealerships in Malaysia and Singapore." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "DriveOS" },
      { name: "twitter:title", content: "DriveOS — Operating system for automotive businesses" },
      { name: "twitter:description", content: "Run inventory, leads, sales, workshop, and finance from one dashboard. Built for dealerships in Malaysia and Singapore." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const router = useRouter();
  const auth = useAuth();

  // When auth state changes, invalidate the router so beforeLoad re-runs
  useEffect(() => {
    router.invalidate();
  }, [auth.isAuthenticated, router]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="bottom-right" />
      
    </QueryClientProvider>
  );
}
