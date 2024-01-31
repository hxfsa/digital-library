import React, { useState } from "react";

//j'ai réussi à récupérer les nouvelles valeurs de title et author mtn j'ai plus qu'à les enregistrer et les envoyer vers ma bdd AVEC AXIOS et url avec id!!

export const EditBookModal = ({
  setEditingBook,
  title,
  author,
  img,
  setTitle,
  setAuthor,
  setImg,
  bookIWantToEdit,
}) => {
  const [bookIHaveEdited, setBookIHaveEdited] = useState(bookIWantToEdit);
  const [titleIHaveEdited, setTitleIHaveEdited] = useState(
    bookIWantToEdit.title
  );
  const [authorIHaveEdited, setAuthorIHaveEdited] = useState(
    bookIWantToEdit.author
  );
console.log(titleIHaveEdited, authorIHaveEdited,"les nouvelles donnes", bookIHaveEdited.title, bookIHaveEdited.author, "et la les anciennes");

  const handleCloseModal = () => {
    setEditingBook(false);
  };

  const handleSubmit = () => {};
  //faut je meette mes nvlles données d'input dans un objet ou usestate en mettant bookiwanttoedit.title.. et l'autre  et ça ça sera les values que je
  //pourrais mettre à jour avec target.Value
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="newBookModalContainer flex justify-center bg-primaryLight right-18 rounded-xl">
        <div className="flex justify-center flex-col gap-8">
          <div className="header flex justify-between  mx-2 items-center">
            <h1 className="text-2xl text-primaryDark pt-2">Edit Book</h1>
            <button onClick={handleCloseModal} className="cruse text-gray-500">
              X
            </button>
          </div>

          <div className="flex items-center justify-between mx-4">
            <form
              enctype="multipart/form-data"
              onSubmit={handleSubmit}
              className="flex flex-col "
            >
              <label htmlFor="" className="text-gray-500 text-xl">
                Title
              </label>
              <input
                type="text"
                placeholder="Title"
                className="placeholder:italic bg-white pl-8 pr-28 py-4 rounded-md border-solid  border border-primaryDark"
                autoFocus
                required
                name="title"
                value={titleIHaveEdited}
                onChange={(e) => setTitleIHaveEdited(e.target.value)}
              />
              <label htmlFor="" className="text-gray-500 text-xl mr-2">
                Author
              </label>
              <input
                type="text"
                placeholder="Author"
                className="placeholder:italic bg-white pl-8 pr-28 py-4 rounded-md border-solid  border border-primaryDark"
                required
                name="author"
                value={authorIHaveEdited}
                onChange={(e) => setAuthorIHaveEdited(e.target.value)}
              />{" "}
              <label htmlFor="" className="text-gray-500 text-xl mr-2">
                Image
              </label>
              <input
                type="file"
                name="cover_image"
                required
                // value={bookIWantToEdit.cover_image}
                // onChange={(e) => setImg(e.target.files[0])}
              />
              <div className="footer w-4/12 flex justify-around my-4">
                <button
                  className=" px-3 bg-primaryDark rounded-lg text-white"
                  type="submit"
                >
                  Save
                </button>
                <button onClick={handleCloseModal} className="text-gray-500">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
