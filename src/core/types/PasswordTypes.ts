import { PasswordInfoEntity } from "@infra/model/passwordInfo";
import { PasswordInfoInsertResultApp } from "@useCases/results/passwordInfo-insert";
import { PasswordInfoListResultApp } from "@useCases/results/passwordInfo-list";

export type PasswordInfoListResult = PasswordInfoListResultApp[];
export type PasswordListDb = Document | PasswordInfoEntity[];
export type PasswordInfoInsertResult = PasswordInfoInsertResultApp;
export type PasswordInfoListResultApplication = PasswordInfoListResultApp[];