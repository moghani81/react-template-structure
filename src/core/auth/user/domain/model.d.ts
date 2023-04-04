export interface UserModel {
  id: number;
  name: string;
  last_name: string;
  username: string;
  email: string;
  address: AddressOption;
  phone: string;
  website: string;
  company: CompanyOptions;
}

interface AddressOptions {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
interface CompanyOptions {
  name: string;
  catchPhrase: string;
  bs: string;
}
