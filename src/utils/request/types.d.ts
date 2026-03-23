import type { InternalAxiosRequestConfig, AxiosResponse } from "axios";

export interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

export interface RequestConfig {
  showLoading?: boolean;
  showError?: boolean;
}
// 重写 config 为扩展后的类型
export interface InternalRequestConfig<
  T = any,
> extends InternalAxiosRequestConfig<T> {
  noRepeat?: boolean;
}

export interface InternalResponseConfig extends Omit<AxiosResponse, "config"> {
  config: InternalRequestConfig;
}
