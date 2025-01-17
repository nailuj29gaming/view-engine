import { ejs, EjsOptions } from "./ejs/mod.ts";
import type { Engine, ViewConfig } from "../types/index.ts";
import { path } from "../../deps.ts";

export const renderEjs: Engine = (
  template: string,
  data: object = {},
  config: ViewConfig = {},
  filename: string = "",
): string => {
  if (config.viewRoot) {
    let option: EjsOptions = { filename: path.join(config.viewRoot, filename) };
    return ejs.render(template, data, option) as string;
  } else {
    return ejs.render(template, data, { filename }) as string;
  }
};
