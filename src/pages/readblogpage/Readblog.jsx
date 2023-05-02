import React from "react";
import { useSelector } from "react-redux";
import "./readblog.css";
import { useNavigate } from "react-router-dom";

export default function Readblog() {
  const { readblog } = useSelector((data) => data);
  const navigate = useNavigate();

  console.log(readblog);
  const buttonddata = "< back";
  return (
    <>
      <button
        className="readblog_backbutton"
        onClick={() => {
          navigate("/home");
        }}
      >
        {" "}
        {buttonddata}
      </button>
      <div className="readblog">
        <div className="readblog_left">
          <img src={readblog.image} height={450} alt=" loading....." />
        </div>
        <div className="readblog_right">
          <h1>{readblog.title}</h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {readblog.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi asperiores possimus saepe accusantium dicta a
            ducimus perspiciatis similique delectus, neque consequuntur harum id
            molestias, eius dolorem est. Quo, aliquid. Repellat officiis libero
            optio nisi reiciendis excepturi et enim qui. Mollitia perspiciatis
            quos omnis dolore beatae suscipit delectus inventore et. Illum,
            rerum? Rerum aperiam eum minima enim nihil magnam doloribus quidem
            laboriosam, deserunt est sequi, ad dolor fugiat veritatis vel rem.
            Velit nulla corporis repellendus deserunt possimus unde aperiam in
            quod ipsam maxime ipsum iure totam sunt officia praesentium itaque
            labore, illum esse, recusandae distinctio ducimus. Autem, ipsa
            accusantium modi esse id ipsum neque iste enim hic earum, natus
            facilis temporibus est et necessitatibus! Quod vero saepe a ullam
            tempora soluta, sunt debitis error accusantium voluptas velit illo?
            Voluptatem dolor natus ratione commodi consectetur architecto!
            Voluptatem repudiandae maiores corrupti, blanditiis perferendis odio
            exercitationem facilis ex similique nam rem quaerat nesciunt
            molestias libero totam et consequatur tenetur aperiam officia
            reiciendis vitae adipisci eos repellendus! Provident error harum
            excepturi, neque aliquam, consectetur reiciendis magnam inventore
            doloremque quos nihil, nemo sed consequatur tempore sunt rerum nulla
            facilis assumenda adipisci doloribus? Dolorum corrupti dolor
            perspiciatis dolore consectetur facilis cumque minima voluptatibus
            libero a facere voluptate minus perferendis, earum veritatis
            sapiente sed? Quas ea corrupti nisi officia debitis, numquam
            aspernatur natus! Soluta, debitis quia dolore rem, voluptate eos,
            quos quas quidem qui voluptas error doloremque unde alias excepturi
            mollitia? Et consectetur asperiores dicta dolorem provident
            perferendis totam. Nulla exercitationem autem quod nostrum qui porro
            ipsum molestiae voluptas deserunt fugiat ex optio, ut voluptatibus
            recusandae nesciunt ducimus quas esse quasi perferendis illum
            ratione consequuntur cumque maxime eos. Provident qui distinctio
            dolorem, veritatis nulla id. Inventore dignissimos nam quae
            exercitationem rem distinctio similique id eaque eius fugit itaque
            doloribus, totam cumque accusamus vitae ullam, praesentium nisi
            natus fuga?
          </p>
        </div>
      </div>
    </>
  );
}
