import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../store/slices";
import useDebounce from "../hooks/useDebounce";
import { Item } from "../components/Item";
import { Filter } from "../components/Filter";

export default function List() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.contacts);
  const [localList, setLocalList] = useState([]);

  const debouncedSearch = useDebounce(localList, 500);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  useEffect(() => {
    setLocalList(list)
  }, [list])

  const deleteItem = (id) => {
    console.log("id item", id);
  };

  const handleInput = (name) => {
    const trimName = name.toUpperCase().trim();

    const newLocalList = list.filter(({ name }) => {
      const fullName = `${name.first} ${name.last}`.toUpperCase();
      if (fullName.indexOf(trimName) > -1 || trimName === "") {
        return true;
      }
    });
    setLocalList(newLocalList);
  };

  if (status === "pending") return <h1>Loading...</h1>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>
              <Filter {...{ handleInput }} />
            </td>
            <td>Location</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Registration Date</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {debouncedSearch.map((item, key) => {
            return <Item {...{ item, deleteItem, key }} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
