import React from 'react'
import houses from '../local/houses.json'

const Renthouses = () => {
    {console.log(houses)}
  return (
    <>
     <table>
     <tbody>
          {houses.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownersname}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areacode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
     </table>
    </>
  )
}

export default Renthouses