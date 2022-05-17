import _provinces from './data/provinces.json';
import _districts from './data/districts.json';
import _wards from './data/wards.json';

import { Province, District, Ward, ProvinceDetail } from './types';

export const provinces: Province[] = _provinces;
export const districts: District[] = _districts;
export const wards: Ward[] = _wards;

export const getProvinces = (): Province[] => {
  return provinces;
};

export const getDistricts = (): District[] => {
  return districts;
};

export const getWards = (): Ward[] => {
  return wards;
};

export const getProvincesWithDetail = (): ProvinceDetail => {
  const tree: any = {};
  provinces.forEach((province: Province) => {
    tree[province.code] = province;
  });

  districts.forEach((district) => {
    if (!tree[district.province_code].districts) {
      tree[district.province_code].districts = {};
    }
    tree[district.province_code].districts[district.code] = district;
  });

  wards.forEach((ward) => {
    if (!tree[ward.province_code].districts[ward.district_code].wards) {
      tree[ward.province_code].districts[ward.district_code].wards = {};
    }
    tree[ward.province_code].districts[ward.district_code].wards[ward.code] =
      ward;
  });

  return tree;
};

export { Province, District, Ward, ProvinceDetail };
