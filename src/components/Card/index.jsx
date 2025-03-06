import { useNavigate } from "react-router-dom";

export const Card = ({ id, heading, description, createdAt, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full rounded-lg bg-white shadow-lg">
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold">{heading}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4 flex h-full flex-row items-center gap-2">
          <p className="flex-1 text-left text-sm text-gray-500">
            Created at: {new Date(createdAt).toLocaleString()}
          </p>
          <div className="flex gap-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => navigate(`/edit/${id}`)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
