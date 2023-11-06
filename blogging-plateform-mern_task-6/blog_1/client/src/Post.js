import React from "react";

function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://s3-prod.autonews.com/s3fs-public/styles/800x600/public/HELLCAT-MAIN_0.jpg"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, illum
        </h2>
        <p className="info">
          <a className="author">Ammar Ibrahim</a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed,
          laborum quos quam aliquam, dolorum, error aperiam ratione nihil
          aspernatur impedit quae minus cumque odio. Facere cumque harum
          quibusdam ratione?
        </p>
      </div>
    </div>
  );
}

export default Post;
