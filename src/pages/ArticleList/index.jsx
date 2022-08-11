import React from 'react'
import { initialState } from '../../utils/authorisation.js';
import { Link, Outlet } from 'react-router-dom';


export function RecentArticles() {
    fetch('https://fullstack.exercise.applifting.cz/articles', {
        mode: "no-cors",
        method: 'GET',
        headers: {
            // 'content-type': 'application/json',
            'accept': 'application/json',
            'X-API-KEY': 'dca7877e-b3d6-4988-b724-f0698d48d641',
            'authorisation': `${initialState.access_token}`
        },
        body: JSON.stringify
            (
                {
                    offset: 0,
                    limit: 10
                }
            )
    })
        .then(async response => {
            console.log('10', response)
            // xApiKey 
        })
        .catch(err => {
            console.log(err);
        });

    // "X-API-KEY": initialState.xApiKey,
    //   Authorization: "dca7877e-b3d6-4988-b724-f0698d48d641",

    return (
        <main style={{ padding: '1rem 0' }}>
            <h2>Recent Articles</h2>
        </main>
    );
}