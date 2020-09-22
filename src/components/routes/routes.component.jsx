import { HomePage } from "../../pages/home-page/home-page..component";
import { VendorsPage } from "../../pages/vendors-page/vendors-page.component";
import { PhotosPage } from "../../pages/photos-page/photos-page.component";
import { RealWeddingsPage } from "../../pages/real-weddings-page/real-weddings-page.component";
import { IntermediateWeddingPage } from "../../pages/intermediate-wedding-page/intermediate-wedding-page.component";
import { LoginPage } from "../../pages/login-page/login-page.component";
import { BlogPage } from "../../pages/blog-page/blog-page.component";
import { VenuesPage } from "../../pages/venues-page/venues-page.component";

export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/vendors",
    component: VendorsPage,
  },
  {
    path: "/photos",
    component: PhotosPage,
  },
  {
    path: "/real-wedding",
    component: RealWeddingsPage,
  },
  {
    path: "/blog",
    component: BlogPage,
  },
  {
    path: "/intermediate-wedding",
    component: IntermediateWeddingPage,
  },
  {
    path: "/signin",
    component: LoginPage,
  },
  {
    path: "/venues",
    component: VenuesPage,
  },
];
