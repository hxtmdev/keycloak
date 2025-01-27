import { lazy } from "react";
import type { Path } from "react-router-dom";
import { generatePath } from "react-router-dom";
import type { RouteDef } from "../../route-config";

export type ClientPoliciesTab = "profiles" | "policies";

export type ClientPoliciesParams = {
  realm: string;
  tab: ClientPoliciesTab;
};

const RealmSettingsSection = lazy(() => import("../RealmSettingsSection"));

export const ClientPoliciesRoute: RouteDef = {
  path: "/:realm/realm-settings/client-policies/:tab",
  element: <RealmSettingsSection />,
  breadcrumb: (t) => t("realm-settings:clientPolicies"),
  access: "view-realm",
};

export const toClientPolicies = (
  params: ClientPoliciesParams
): Partial<Path> => ({
  pathname: generatePath(ClientPoliciesRoute.path, params),
});
