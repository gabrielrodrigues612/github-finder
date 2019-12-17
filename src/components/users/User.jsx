import React, { useEffect } from "react";
import Repos from "../repos/Repos";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;
  return (
    <div>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hireable:
      {hireable ? (
        <i className="fas fa-times-circle text-success" />
      ) : (
        <i className="fas fa-check text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            className="round-img"
            src={avatar_url}
            alt="avatar"
            style={{ width: "150px" }}
          />
          <h2>{name}</h2>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <React.Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </React.Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            View GitHub profile
          </a>
          <ul>
            <li>
              {login && (
                <React.Fragment>
                  <strong>Username: </strong> {login}
                </React.Fragment>
              )}
            </li>
            <li>
              {company && (
                <React.Fragment>
                  <strong>Company: </strong>
                  {company}
                </React.Fragment>
              )}
            </li>
            <li>
              {blog && (
                <React.Fragment>
                  <strong>Blog:</strong> {blog}
                </React.Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public repos.: {public_repos}</div>
        <div className="badge badge-dark">Public gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
