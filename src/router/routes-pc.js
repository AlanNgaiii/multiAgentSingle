import AppPc from "@/views/pc/AppPc";
import Index from "@/views/pc/Index";

const pcRoutes =   {
  path: "/pc",
  component: AppPc,
  redirect: "/pc/index",
  children: [
    {
      path: "index",
      component: Index
    }
  ]
}

export default pcRoutes;