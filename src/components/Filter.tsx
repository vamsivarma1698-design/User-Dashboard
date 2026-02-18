import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/users/userSlice";
import type { RootState } from "../app/store";
import { FilterInput } from "./Filter.styles";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(
    (state: RootState) => state.users.filter
  );

  return (
    <FilterInput
      type="text"
      value={filter}
      placeholder="Search users..."
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  );
};
