/**
 * Hello
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-06-22 11:52:57
 * @since 0.1.0
 */

import axios from "axios";
import LS from "@/common/util/ls";

// build http header
function buildHeader(): { [key: string]: string } {
  return {
    Authorization: "Bearer" + " " + LS.get("token") || "",
  };
}

export let ax = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  headers: {},
  timeout: 60000,
  responseType: "json",
  // params: {
  //   t: new Date().getTime()
  // },
  transformRequest: [
    function(data) {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    async function(data) {
      return data;
    },
  ],
});

/* tslint:disable-next-line */
function processData(data: any = {}) {
  // if (data instanceof FormData) {
  //   // data.append('token', token)
  // } else {
  //   // data.token = token
  // }

  return data;
}

// 处理错误
function handleError(err) {
  // 如果是手动取消的请求，不显示错误信息
  if (axios.isCancel(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

/**
 * @description HTTP GET 方法
 * @export
 * @template T 返回数据类型
 * @param {string} url 请求地址
 * @param {Types.PlainObject} [data] 请求数据
 * @returns {Promise<T>}
 */
export async function get<T>(
  url: string,
  data?: Types.PlainObject
): Promise<T> {
  try {
    ax.defaults.headers.common = buildHeader();
    ax.defaults.headers.get["Content-Type"] = "application/json";
    const res = await ax.get(`${url}`, {
      params: processData(data),
    });
    return res.data;
  } catch (err) {
    handleError(err);
    throw err;
  }
}

/**
 * @description HTTP POST 公用方法
 * @export
 * @template T 返回数据格式
 * @param {string} url 请求地址
 * @param {Types.PlainObject} [data] 请求数据
 * @returns {Promise<T>}
 */
export async function post<T>(
  url: string,
  data?: Types.PlainObject
): Promise<T> {
  ax.defaults.headers.common = buildHeader();
  ax.defaults.headers.post["Content-Type"] = "application/json";
  try {
    const res = await ax.post(`${url}`, processData(data));
    return res.data;
  } catch (err) {
    handleError(err);
    throw err;
  }
}

/**
 * @description HTTP PUT 公共方法
 * @export
 * @template T 返回数据类型
 * @param {string} url 请求地址
 * @param {Types.PlainObject} [data] 请求数据
 * @returns {Promise<T>}
 */
export async function put<T>(
  url: string,
  data?: Types.PlainObject
): Promise<T> {
  ax.defaults.headers.put["Content-Type"] = "application/json";
  try {
    const res = await ax.put(`${url}`, processData(data));
    return res.data;
  } catch (err) {
    handleError(err);
    throw err;
  }
}

/**
 * @description HTTP DELETE 公共方法
 * @export
 * @template T 返回数据
 * @param {string} url 请求url
 * @param {Types.PlainObject} [data] 请求数据
 * @returns {Promise<T>}
 */
export async function httpDelete<T>(
  url: string,
  data?: Types.PlainObject
): Promise<T> {
  ax.defaults.headers.delete["Content-Type"] = "application/json";
  try {
    const res = await ax.delete(`${url}`, processData(data));
    return res.data;
  } catch (err) {
    handleError(err);
    throw err;
  }
}

export async function httpPatch<T>(
  url: string,
  data?: Types.PlainObject
): Promise<T> {
  ax.defaults.headers.patch["Content-Type"] = "application/json";
  try {
    const res = await ax.patch(`${url}`, processData(data));
    return res.data;
  } catch (err) {
    handleError(err);
    throw err;
  }
}

// delete, put, patch,etc ....
