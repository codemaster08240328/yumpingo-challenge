import { useMemo, useState } from "react"
import { useParams } from "react-router"
import Page from '../../components/Page'
import Card from "../../components/Card"
import { updateData } from '../../store/restaurant/restaurantReducer'

const WEEK_DAYS = [
  'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
]

const ListDetail = ({ restaurants, dispatch }) => {
  const { id } = useParams();
  const [ edit, setedit ] = useState(false);
  const item = useMemo(() => {
    return restaurants.find(rest => rest.uid === id)
  }, [restaurants, id])
  const [ type, settype ] = useState(item ? item.type : '');
  const [ phoneNum, setphoneNum ] = useState(item ? item.phone_number : '');
  const [ address, setaddress ] = useState(item ? item.address : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newItem = {
      ...item,
      phone_number: phoneNum,
      type,
      address,
    }

    dispatch(updateData(newItem));
    setedit(false);
  }

  return (
    <div className="flex relative h-full">
      <div className="overflow-scroll flex-1">
        <Page title="Master/Detail">
          {
            !item && (
              <pre>
                <p>No data to show. Please go to list...</p>
              </pre>
            )
          }
          {
            item && (
              <Card title={item.name}>
                <form onSubmit={handleSubmit}>
                  <div className="flex">
                    <div className="w-80">
                      <img src={item.logo} alt={item.name} className="w-80 max-w-none" />
                    </div>
                    <div className="ml-4">
                      <label className="font-bold">Type:</label>
                      {!edit && <p>{item.type}</p>}
                      {edit && <input defaultValue={item.type} className="p-1 block bg-gray-100" onChange={e => settype(e.currentTarget.value)} autoFocus/>}
                      <label className="font-bold">Description:</label>
                      <p>{item.description}</p>
                      <label className="font-bold">Phone Number:</label>
                      {!edit && <p>{item.phone_number}</p>}
                      {edit && <input defaultValue={item.phone_number} className="p-1 block bg-gray-100" onChange={e => setphoneNum(e.currentTarget.value)} name="phone_number" />}
                      <label className="font-bold">Address:</label>
                      {!edit && <p>{item.address}</p>}
                      {edit && <input defaultValue={item.address} className="p-1 block bg-gray-100 w-full" name="address" onChange={e => setaddress(e.currentTarget.value)} />}
                    </div>
                  </div>
                  <br />
                  <div>
                    <label className="font-bold">Review:</label>
                    <p>{item.review}</p>
                  </div>

                  <div>
                    <label className="font-bold">Hours:</label>
                    <table className="table-auto bg-emerald-100 border-collapse border">
                      <thead className="bg-gray-100">
                        <tr>
                          {
                            WEEK_DAYS.map(day => <th className="capitalize border" key={day}>{day}</th>)
                          }
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {
                            WEEK_DAYS.map(day => <td className="border p-4" key={day}>{`${item.hours[day].opens_at} - ${item.hours[day].closes_at}`}</td>)
                          }
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    {!edit && <button className="bg-pink-500 text-white px-4 py-2" onClick={() => setedit(true)}>{'Edit'}</button>}
                    {edit && <button type="submit" className="bg-pink-500 text-white px-4 py-2">{'Save'}</button>}
                  </div>
                </form>
              </Card>
            )
          }
        </Page>
      </div>
    </div>
  )
}

export default ListDetail