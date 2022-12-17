export interface ItemProps {
  isListing: boolean;
  name: string;
  location: string;
  price: string;
  id: number;
}

export interface BookingDto {
  accomodationId: number;
}

export interface CreateListingDto {
  name: string;
  location: string;
  price: number;
}
