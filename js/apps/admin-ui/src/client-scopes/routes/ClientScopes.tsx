import { lazy } from "react";
import type { Path } from "react-router-dom";
import { generatePath } from "react-router-dom";
import type { RouteDef } from "../../route-config";

export type ClientScopesParams = { realm: string };

const ClientScopesSection = lazy(() => import("../ClientScopesSection"));

export const ClientScopesRoute: RouteDef = {
  path: "/:realm/client-scopes",
  element: <ClientScopesSection />,
  breadcrumb: (t) => t("client-scopes:clientScopeList"),
  access: "view-clients",
};

export const toClientScopes = (params: ClientScopesParams): Partial<Path> => ({
  pathname: generatePath(ClientScopesRoute.path, params),
});
