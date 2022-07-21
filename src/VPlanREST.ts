import IVPlanREST from "./IVPlanREST";
import VPlanRESTOptions from "./types/VPlanRESTOptions";
import SubstitutionPlan, { makePlan } from "./types/SubstitutionPlan";
import { apiDateString } from "./util";
import axios, { AxiosResponse, AxiosError } from "axios";
import APIPlanResponse from "./types/api/APIPlanResponse";

import { DEFAULT_API_URL, DEFAULT_USERAGENT_STRING } from "./constants";

class VPlanREST implements IVPlanREST {
  private options: VPlanRESTOptions;

  constructor({
    token,
    url = DEFAULT_API_URL,
    useragent = DEFAULT_USERAGENT_STRING
  }: VPlanRESTOptions) {
    this.options = {
      token: token,
      url: url,
      useragent: useragent
    };
  }

  setToken = (newValue: string) => {
    this.options.token = newValue;
  };

  setUrl = (newValue: string) => {
    this.options.url = newValue;
  };

  setUseragent = (newValue: string) => {
    this.options.useragent = newValue;
  };

  fetchPlan = (forDate: Date) => {
    return new Promise<SubstitutionPlan>((resolve, reject) => {
      const requestDate = apiDateString(forDate);
      axios
        .get(this.options.url!, {
          params: {
            date: requestDate
          },
          headers: {
            Authorization: `Bearer ${this.options.token}`
          }
        })
        .then((response: AxiosResponse<APIPlanResponse>) => {
          resolve(makePlan(response.data));
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  };
}

export default VPlanREST;
