import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Links.css';

function LinkIcon(props) {
    const { link } = props;

    if (link.useIconFromIconset) {
        return (
            <FontAwesomeIcon icon={link.icon}/>
        );
    }
    else {
        return (
            <img src={link.icon} alt={link.title + " icon"} />
        );
    }
}

function Link(props) {
    const { link } = props;

    return (
        <a className='btn btn-outline-primary btn-block' href={link.url} rel="noreferrer" target="_blank">
            <LinkIcon link={link} />
            {link.title}
        </a>
    );
}

function Links(props) {
    const { links } = props;
    let buffer = [];

    links.forEach(link => {
        buffer.push(<Link link={link} />)
    });

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <div className='vertical-buttons'>
                        {buffer}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Links;