import { useRouter } from "next/router";

export default function useMoveToSubCategory() {
  const router = useRouter();

  const clickSubCategory = (data: string) => () => {
    console.log(data);

    const sub = String(data);

    router.push({
      pathname: `/categoryList/subCategoryList/${router.query.data}`,
      query: { sub }
    });
  };

  return { clickSubCategory };
}
