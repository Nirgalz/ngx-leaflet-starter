import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MapComponent } from "./map/map.component";
import { StoriesComponent } from "./stories/stories.component";

const routes: Routes = [
  {
    path: "map",
    component: MapComponent
  },
  {
    path: "stories",
    component: StoriesComponent
  },
  {
    path: "",
    redirectTo: "/map",
    pathMatch: "full"
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ]
})
export class AppRoutingModule {}
