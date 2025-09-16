import { TrashIcon } from "@heroicons/react/24/solid";

function DeleteReservation({ bookingId }: { bookingId: string }) {
  return (
    <button className="group text-primary-300 hover:bg-accent-600 flex flex-grow cursor-pointer items-center justify-center gap-1 px-3 text-xs font-bold uppercase transition-colors hover:text-red-900">
      <TrashIcon className="text-primary-600 h-5 w-5 transition-colors group-hover:text-red-800" />
      <span className="mt-1">Delete</span>
    </button>
  );
}

export default DeleteReservation;
