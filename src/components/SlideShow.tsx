import React from "react";

export const SlideShow = () => {
  return (
    <div className="site-section py-0">
      <div className="owl-carousel hero-slide owl-style">
        <div className="site-section">
          <div className="container">
            <div className="half-post-entry d-block d-lg-flex bg-light">
              <div
                className="img-bg"
                style={{ backgroundImage: 'url("images/big_img_1.jpg")' }}
              />
              <div className="contents">
                <span className="caption">Editor's Pick</span>
                <h2>
                  <a href="blog-single.html">
                    News Needs to Meet Its Audiences Where They Are
                  </a>
                </h2>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate vero obcaecati natus adipisci necessitatibus eius,
                  enim vel sit ad reiciendis. Enim praesentium magni delectus
                  cum, tempore deserunt aliquid quaerat culpa nemo veritatis,
                  iste adipisci excepturi consectetur doloribus aliquam
                  accusantium beatae?
                </p>
                <div className="post-meta">
                  <span className="d-block">
                    <a href="gfg">Dave Rogers</a> in <a href="fgf">Food</a>
                  </span>
                  <span className="date-read">
                    Jun 14 <span className="mx-1">•</span> 3 min read{" "}
                    <span className="icon-star2" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="half-post-entry d-block d-lg-flex bg-light">
              <div
                className="img-bg"
                style={{ backgroundImage: 'url("images/big_img_1.jpg")' }}
              />
              <div className="contents">
                <span className="caption">Editor's Pick</span>
                <h2>
                  <a href="blog-single.html">
                    News Needs to Meet Its Audiences Where They Are
                  </a>
                </h2>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate vero obcaecati natus adipisci necessitatibus eius,
                  enim vel sit ad reiciendis. Enim praesentium magni delectus
                  cum, tempore deserunt aliquid quaerat culpa nemo veritatis,
                  iste adipisci excepturi consectetur doloribus aliquam
                  accusantium beatae?
                </p>
                <div className="post-meta">
                  <span className="d-block">
                    <a href="gh">Dave Rogers</a> in <a href="hgh">Food</a>
                  </span>
                  <span className="date-read">
                    Jun 14 <span className="mx-1">•</span> 3 min read{" "}
                    <span className="icon-star2" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
