import { dehydrate, QueryClient, useQuery } from "react-query";
import { httpClient } from "../../utils/httpClient";
import Items from "./items";

export default function Accomodation() {
  const { data } = useQuery("allAccom", () => {
    return httpClient.get("/accomodation/all");
  });

  const accomodations = data?.data.data || [];

  return (
    <div className="flex justify-center items-center" id="content">
      <div className="w-full h-5/6 border grid grid-cols-4 gap-12 justify-between border-none">
        {accomodations.map((data: any) => {
          return (
            <Items
              key={data.id}
              isListing
              name={data.name}
              location={data.location}
              price={data.price}
              id={data.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx: any) => {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery("allAccom", () => {
    return httpClient.get("/accomodation/all");
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
