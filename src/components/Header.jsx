import UpComing from "./UpComing";

function Header(props) {
  return (
    <>
      <div className="navbar fixed bg-base-100 z-10">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a>TV Series</a>
              </li>
              <li>
                <a>Movies</a>
              </li>
              <li>
                <a>Genre</a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Filemwey
          </a>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a>TV Series</a>
            </li>
            <li>
              <a>Movies</a>
            </li>
            <li>
              <a>Genre</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle" onClick={() => window.modal_search.showModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <dialog id="modal_search" className="modal">
            <form method="dialog" className="modal-box w-11/12 max-w-[68rem]">
              <input type="text" placeholder="Search your movie" className="input input-ghost input-lg w-full" onChange={({ target }) => props.search(target.value)} />
              {/* <p className="py-4">Press ESC key or click outside to close</p> */}
              <UpComing movies={props.movies} />
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </>
  );
}

export default Header;
