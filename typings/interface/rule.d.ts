export namespace FormRule {
  /**
   * @description 表单验证规则数据类型
   * @interface Rule
   */
  interface Rule {
    [key: string]: RuleItem[];
  }
  interface RuleItem {
    required?: boolean;
    message?: string;
    trigger: string;
    min?: number;
    max?: number;
    type?: string;
    validator?: Function;
  }
  // 模拟表单验证
  interface LoginRule {
    username: string;
    password: string;
  }

}

