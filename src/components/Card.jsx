/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
    <div className="w-11/12 sm:w-3/5 m-auto border-b last:border-0 mb-8">
      <div className="flex flex-col md:flex-row md:items-center gap-5 pb-8">
        <img
          src={`src/${props.item.imageUrl}`}
          alt=""
          className="max-w-52 w-full h-full rounded-lg"
        />
        <div className="flex flex-col justify-center">
          <div className="flex mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 mr-1"
            >
              <path
                fill="#34d399"
                d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
              />
            </svg>
            <p className="mr-3 font-thin">{props.item.location}</p>
            <a
              href={props.item.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-600 underline underline-offset-4 font-thin decoration-from-font"
            >
              View on Google Maps
            </a>
          </div>
          <p className="text-3xl font-bold mb-7">{props.item.title}</p>
          <p className="font-semibold mb-2">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
