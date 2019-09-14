import React, { Fragment, useContext, useEffect } from 'react';
import { GithubContext } from '../context/github/githubContext';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
    const urlName = match.params.name;


    useEffect((e) => {
        getUser(urlName);
        getRepos(urlName);
    }, []);

    if (loading) {
        return <p className='text-center'>Loading...</p>
    }
    const {
        name, company, avatar_url,
        location, blog, login, public_repos
    } = user;

    return (
        <Fragment>
            <Link to='/' classname='btn btn-link'>to home</Link>
            <div className='card mb-4'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-sm-3 text-center'>
                            <img src={avatar_url}  alt=''/>
                            <h1>{name}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default Profile;
