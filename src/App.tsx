import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    // <div className="site-wrap">
    //   <div className="site-mobile-menu site-navbar-target">
    //     <div className="site-mobile-menu-header">
    //       <div className="site-mobile-menu-close mt-3">
    //         <span className="icon-close2 js-menu-toggle" />
    //       </div>
    //     </div>
    //     <div className="site-mobile-menu-body" />
    //   </div>
    //   <div className="header-top">
    //     <Header />
    //     <Menu />
    //   </div>

    //   <SlideShow />
    //   <Profile />
    //   {/* END section */}

    //   {/* <div className="py-0">
    //     <div className="container">
    //       <div className="half-post-entry d-block d-lg-flex bg-light">
    //         <div
    //           className="img-bg"
    //           style={{ backgroundImage: 'url("images/big_img_1.jpg")' }}
    //         />
    //         <div className="contents">
    //           <span className="caption">Editor's Pick</span>
    //           <h2>
    //             <a href="blog-single.html">
    //               News Needs to Meet Its Audiences Where They Are
    //             </a>
    //           </h2>
    //           <p className="mb-3">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //             Voluptate vero obcaecati natus adipisci necessitatibus eius,
    //             enim vel sit ad reiciendis. Enim praesentium magni delectus cum,
    //             tempore deserunt aliquid quaerat culpa nemo veritatis, iste
    //             adipisci excepturi consectetur doloribus aliquam accusantium
    //             beatae?
    //           </p>
    //           <div className="post-meta">
    //             <span className="d-block">
    //               <a href="#">Dave Rogers</a> in <a href="#">Food</a>
    //             </span>
    //             <span className="date-read">
    //               Jun 14 <span className="mx-1">•</span> 3 min read{" "}
    //               <span className="icon-star2" />
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
    //   <div className="site-section">
    //     <div className="container">
    //       <div className="row">
    //         <Content1 />
    //         <Content1 />
    //         <Content1 />
    //         <Content1 />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="site-section">
    //     <div className="container">
    //       <div className="row">
    //         <Content2 />
    //         <Content3 />
    //       </div>
    //       <div className="row">
    //         <div className="col-lg-6">
    //           <ul className="custom-pagination list-unstyled">
    //             <li>
    //               <a href="#">1</a>
    //             </li>
    //             <li className="active">2</li>
    //             <li>
    //               <a href="#">3</a>
    //             </li>
    //             <li>
    //               <a href="#">4</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="site-section subscribe bg-light">
    //     <div className="container">
    //       <form action="#" className="row align-items-center">
    //         <div className="col-md-5 mr-auto">
    //           <h2>Newsletter Subcribe</h2>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //             Perferendis aspernatur ut at quae omnis pariatur obcaecati
    //             possimus nisi ea iste!
    //           </p>
    //         </div>
    //         <div className="col-md-6 ml-auto">
    //           <div className="d-flex">
    //             <input
    //               type="email"
    //               className="form-control"
    //               placeholder="Enter your email"
    //             />
    //             <button type="submit" className="btn btn-secondary">
    //               <span className="icon-paper-plane" />
    //             </button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
  );
}

export default App;
