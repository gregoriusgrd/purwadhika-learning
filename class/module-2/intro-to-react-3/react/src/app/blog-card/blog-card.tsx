export default function BlogCard() {
  return (
    <div className="card-mobile">
      <div className="card-image">
        <img src="Blog Image.png" alt="" />
      </div>

      <div className="card-content">
        <div className="category">
          <p>Learning</p>
        </div>

        <div className="publish-date">
          <p>Published 21 Dec 2023</p>
        </div>

        <div className="title">
          <p>HTML & CSS foundations</p>
        </div>

        <div className="description">
          <p>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
      </div>

      <div className="author">
        <img src="userpic.png" alt="foto user" />
        <span>Greg Hooper</span>
      </div>
    </div>
  );
}
