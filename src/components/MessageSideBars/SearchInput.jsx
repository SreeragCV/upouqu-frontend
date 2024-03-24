import React from "react";

function SearchInput() {
  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered px-3 bg-slate-700 text-white py-1 rounded-full"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle rounded-full px-1 py-0 bg-sky-500 text-white"
      >
        <i className="fa fa-search w-6 h-6 outline-none"></i>
      </button>
    </form>
  );
}

export default SearchInput;
