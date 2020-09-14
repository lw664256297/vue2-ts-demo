// declare module '*.vue' {
//   import Vue from 'vue'
//   export default Vue
// }

/**
 * 告诉 TypeScript *.vue 后缀的文件可以交给 vue 模块来处理
 * 而在代码中导入 *.vue 文件的时候，需要写上 .vue 后缀。
 * 原因还是因为 TypeScript 默认只识别 *.ts 文件，不识别 *.vue 文件
 */
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const value: any;
  export default value;
}

/**
 * For module import or split code use require
 */
interface NodeRequire {
  ensure(
    paths: string[],
    callback: (require: any) => void,
    chunkName?: string
  ): void;
  ensure(
    paths: string[],
    callback: (require: any) => void,
    errorCallback?: (err: any) => void,
    chunkName?: string
  ): void;
}
