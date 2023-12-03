import {React, useEffect} from "react";

//assets
import mdt from "../assets/images/mdt.png";
import share from "../assets/icons/share.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import heart from "../assets/icons/heart.svg";

export const BookDetails = ( { setShowNavbarAndFooter }) => {
  useEffect(() => {
    setShowNavbarAndFooter(true);
  }, []);
  return (
    <div className="bookDetails flex justify-center ">
      <div className="bookDetailsContainer bg-white w-8/12 h-1/2 mb-52 flex flex-row">
        <div className="bookCover bg-white w-1/3 flex justify-center items-center">
          <img src={mdt} alt="le maître du temps " className="bookImg h-64   bg-white" />
        </div>
        <div className="infos bg-white w-8/12">
          <div className="title bg-white p-4 ">
            <h1 className="text-3xl font-semibold bg-white">Le Maître du Temps</h1>
          </div>
          <div className="shareWish flex justify-between bg-white pb-8">
            <div className="share flex">
              <img src={share} alt="share icon" className="h-8 bg-white" />
              <img
                src={facebook}
                alt="facebook icon"
                className="h-8 bg-white"
              />
              <img src={twitter} alt="twitter icon" className="h-8 bg-white" />
              <img
                src={whatsapp}
                alt="whatsapp icon"
                className="h-8 bg-white"
              />
            </div>
            <div className="wish bg-white ">
              <img
                src={heart}
                alt="heart icon"
                className="h-7 pr-12 bg-white"
              />
            </div>
          </div>
          <table className="bookTable w-11/12 mb-12 ">
            <tbody>
              <tr>
                <td>Author(s)</td>
                <td className="underline text-primaryDark">Louis Cooper</td>
              </tr>
              <tr>
                <td>Publishing Year</td>
                <td>2008</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>French</td>
              </tr>
              <tr>
                <td>Synopsis</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio non aperiam iusto nostrum atque repellat, modi
                  vitae, numquam aliquid officia, eveniet vel ullam explicabo.
                  Distinctio corporis nihil illo iure eum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eum non, facilis laudantium aperiam provident qui impedit officiis eaque nulla error corrupti tempora repellendus, at maiores consequuntur voluptas iste doloribus?
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
