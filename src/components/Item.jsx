import React from 'react'
import dayjs from 'dayjs';
import { Picture } from './Picture/Picture';

export const Item = ({item, deleteItem}) => {

    const name = `${item.name.first} ${item.name.last}`;
    const location = `${item.location.state} ${item.location.city}`;
    const id = item.login.uuid

    const date = dayjs(item.registered.date).format('DD.MM.YYYY');

    return (
        <tr>
            <td>
                <Picture {...{picture: item.picture, name}}/>
            </td>
            <td>
                {name}
            </td>
            <td>
                {location}
            </td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{date}</td>
            <td>
                <button onClick={() => deleteItem(id)}>del</button>
            </td>
        </tr>
    )
}
