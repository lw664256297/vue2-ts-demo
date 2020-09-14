/**
 * Hello
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-06-22 11:54:20
 * @since 0.1.0
 */
import { IRouterConfigCustom } from "../../typings/interface";

function getView(name: string) {
  return (
    resolve: (arg0: any) => void,
    reject: ((err: any) => void) | undefined
  ) => {
    require.ensure(
      [],
      (require) => {
        resolve(require(`@/views/${name}/index.ts`));
      },
      reject,
      "Hello"
    );
  };
}

const routes: IRouterConfigCustom[] = [
  {
    name: "Hello",
    path: "/hello",
    component: getView("Hello"),
  },
];

export default routes;
