import { Select } from "antd";
import { category, option } from "../../../../commons/libraries/category";
import { useEffect } from "react";

type CategoryName = keyof typeof category;

export default function Category2(props) {
  useEffect(() => {
    props.setCategorySelect(props.data?.product_category);
    props.setCategoryArray(option[props.data?.product_category]);
    // props.setOptionSelect(option[props.data?.product_category][0]);
    if (
      option[props.data?.product_category] &&
      option[props.data?.product_category].length > 0
    ) {
      props.setOptionSelect(option[props.data?.product_category][0]);
    }
  }, [props.data]);

  const handleCategoryChange = (value: CategoryName) => {
    props.setCategorySelect(value);
    props.setCategoryArray(option[value]);
    props.setOptionSelect(option[value][0]);
  };

  const onSecondCityChange = (value: CategoryName) => {
    props.setOptionSelect(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%"
      }}
    >
      <>
        <Select
          defaultValue={
            props.data
              ? `${props.data?.product_category}`
              : "카테고리를 선택해주세요."
          }
          style={{ marginRight: 5, width: "40%" }}
          size={"large"}
          onChange={handleCategoryChange}
          options={category.map(category => ({
            label: category.label,
            value: category.value
          }))}
        />
        <Select
          style={{ width: "100%" }}
          size={"large"}
          value={
            props.optionSelect
              ? `${props.optionSelect}`
              : "옵션을 선택해주세요."
          }
          onChange={onSecondCityChange}
          options={props.categoryArray && props.categoryArray.map(option => ({
            label: option,
            value: option
          }))}
        />
      </>
    </div>
  );
}
