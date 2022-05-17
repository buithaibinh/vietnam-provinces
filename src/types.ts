export type ProvinceDetail = {
  [key: string]: Province & {
    districts: {
      [key: string]: District & {
        wards: {
          [key: string]: Ward;
        };
      };
    };
  };
};

export type Province = {
  code: string;
  name?: string;
  unit?: string;
};

export type District = Province & {
  province_code: string;
  province_name?: string;
  full_name?: string;
};

export type Ward = District & {
  district_code: string;
  district_name?: string;
  full_name?: string;
};
