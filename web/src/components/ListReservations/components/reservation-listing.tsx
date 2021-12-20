import { useState } from 'react'
import ReservationActionButton from 'src/components/bit.dev/reservation-dashboard/reservation-button'
import { Button } from '@buildcities/build-ui.components.all'

type ReservationListingProps = {
  address: string
  checkIn: string
  checkOut: string
  discordName: string
  avatar: string
  type: string
}

const ReservationListing = ({
  address,
  checkIn,
  checkOut,
  discordName,
  avatar,
  type,
}: ReservationListingProps) => {
  const [overlay, setOverlay] = useState<boolean>(false)
  return (
    <>
      {type === 'unapproved' && (
        <tr className="flex items-center justify-between xl:flex-nowrap flex-wrap bg-cardBackground rounded-xl mb-4 px-6 py-4">
          <td className="flex items-center xl:w-1/5 sm:w-1/3 sm:justify-start sm:mb-0 mb-4 justify-center w-full">
            <img
              src={avatar}
              alt={`${address}'s avatar`}
              className="w-16 h-16 border border-white rounded-full"
            />
            <div className="flex flex-col items-start ml-4">
              <span>{address}</span>
              {discordName.length > 0 && <span>{discordName}</span>}
            </div>
          </td>
          <td className="flex relative sm:justify-center justify-end xl:w-1/5 sm:w-1/3 sm:mb-0 sm:pr-0 pr-4 mb-4 w-1/2">
            {checkIn}
            <span className="sm:hidden block absolute -right-2">to</span>
          </td>
          <td className="flex sm:justify-center justify-start xl:w-1/5 sm:w-1/3 sm:mb-0 sm:pl-0 pl-4 mb-4 w-1/2">
            {checkOut}
          </td>
          <td className="flex xl:justify-center xl:pr-0 pr-2 justify-end xl:w-1/5 w-1/2">
            <ReservationActionButton type="Reject" />
          </td>
          <td className="flex xl:justify-end xl:pl-0 pl-2 justify-start xl:w-1/5 w-1/2">
            <ReservationActionButton type="Accept" />
          </td>
        </tr>
      )}
      {type === 'approved' && (
        <div
          className="relative flex items-center justify-between bg-cardBackground rounded-xl px-6 py-4 transition-all duration-300 hover:drop-shadow-[0_0px_10px_rgba(123,97,255,0.5)]"
          onMouseEnter={() => setOverlay(true)}
          onMouseLeave={() => setOverlay(false)}
        >
          <div
            className={`absolute top-0 right-0 w-1/2 flex items-center justify-end h-full transition-opacity duration-300 bg-cardBackground px-6 py-4 ${
              overlay
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <Button text="Send message" style="primary" className="w-44 h-11" />
          </div>
          <div className="flex items-center">
            <img
              src={avatar}
              alt={`${address}'s avatar`}
              className="w-16 h-16 border border-white rounded-full"
            />
            <div className="flex flex-col items-start ml-4">
              <span>{address}</span>
              {discordName.length > 0 && <span>{discordName}</span>}
            </div>
          </div>
          <div>
            <span>{checkIn}</span>
          </div>
          <div>
            <span>{checkOut}</span>
          </div>
        </div>
      )}
    </>
  )
}

export default ReservationListing
