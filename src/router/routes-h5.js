import AppH5 from "@/views/h5/AppH5";
import Index from "@/views/h5/Index";

const h5Routes = {
  path: "/h5",
  component: AppH5,
  redirect: "/h5/index",
  children: [
    {
      path: "index",
      component: Index
    }
  ]
}

export default h5Routes;