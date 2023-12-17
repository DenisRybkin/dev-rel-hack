import {Banner} from './BannerModel'

export type EventModel = {
  status?: string;
  created_at?: string;
  updated_at?: string;
  banner_id?: number;
  id?: number;
  title?: string;
  description?: string;
  company_id?: number;
  starts_at?: string;
  ends_at?: string;
  banner?: Banner;
};
