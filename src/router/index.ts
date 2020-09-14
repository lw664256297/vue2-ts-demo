import Vue from "vue";
import Router from "vue-router";

// routes
/** auto import */
import HelloRoute from "./Hello";
import { IRouterConfigCustom } from "../../typings/interface";

Vue.use(Router);

// prettier-ignore
const routes: IRouterConfigCustom[] = []
  /** auto concat */
    .concat(HelloRoute)
    .concat([]);

export default new Router({
  routes,
});
