import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Menu = () => {
    const [active, setActive] = useState(false);

    return (
        <>
            <button
                className={active ? 'hamburger hamburger--open' : 'hamburger'}
                aria-label="menu"
                onClick={() => {
                    if (active) {
                        setActive(false);
                    } else {
                        setActive(true);
                    }
                }}
            >
                <i className="las la-bars"></i>
            </button>
            {active && (
                <ul className="navigation-bar">
                    <li>
                        <Link
                            className="navigation-link"
                            to="/articlelist"
                            onClick={() => setActive(false)}
                        >
                            Recent Articles
                        </Link>{' '}
                    </li>
                    <li>
                        <Link
                            className="navigation-link"
                            to="/article"
                            onClick={() => setActive(false)}
                        >
                            About
                        </Link>
                    </li>
                </ul>
            )}
        </>
    );
};


export const Header = () => {
    const [withLine, setWithLine] = useState(false);

    return (
        <>
            <header className="page-header">
                <Menu />
                <div>
                    <Link style={{ display: 'block', margin: '1rem 0' }} to="/">
                       
                    </Link>{' '}
                </div>

                <nav className="navigation">
                    <button
                        onClick={() => setWithLine(true)}
                        className="userChoosed"
                        disabled={withLine}
                    >
                        <Link
                            className="navigation-link"
                            to="/articlelist"
                            alt={withLine ? 'userChoosed' : 'navigation-link'}
                        >
                            Recent Articles
                        </Link>{' '}
                    </button>
                    <br />
                    <button
                        onClick={() => setWithLine(true)}
                        className="userChoosed"
                        disabled={withLine}
                    >
                        <Link
                            className="navigation-link"
                            to="/article"
                            alt={withLine ? 'userChoosed' : 'navigation-link'}
                        >
                            About
                        </Link>{' '}
                    </button>
                </nav>
            </header>
        </>
    );
};