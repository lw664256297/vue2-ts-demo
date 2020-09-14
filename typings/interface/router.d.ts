import { RouteConfig } from "vue-router";
/**
 * @description 路由配置数据类型
 * @export
 * @interface IRouterConfigCustom
 * @extends {RouteConfig}
 */

export type IRouterConfigCustom = RouteConfig & {
  title?: string;
  children?: IRouterConfigCustom[];
  icon?: string;
};
