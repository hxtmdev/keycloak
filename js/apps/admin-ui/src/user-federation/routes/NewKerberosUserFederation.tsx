import { lazy } from "react";
import type { Path } from "react-router-dom";
import { generatePath } from "react-router-dom";
import type { RouteDef } from "../../route-config";

export type NewKerberosUserFederationParams = { realm: string };

const UserFederationKerberosSettings = lazy(
  () => import("../UserFederationKerberosSettings")
);

export const NewKerberosUserFederationRoute: RouteDef = {
  path: "/:realm/user-federation/kerberos/new",
  element: <UserFederationKerberosSettings />,
  breadcrumb: (t) => t("common:settings"),
  access: "view-realm",
};

export const toNewKerberosUserFederation = (
  params: NewKerberosUserFederationParams
): Partial<Path> => ({
  pathname: generatePath(NewKerberosUserFederationRoute.path, params),
});
