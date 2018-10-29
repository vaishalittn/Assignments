import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';


class Footer extends Component {
    render() {
        return (
            <div>

                <div>
                    <img src="https://static.jabong.com/cms/new-site/Festive_1540314239852.jpg" />
                    <img src="https://static.jabong.com/cms/new-site/Alliances-head_1540315515694.webp"/>
                </div>
                <div>
                <Pager>
                    <Pager.Item previous href="#">
                        &larr; Previous Page
                    </Pager.Item>
                    <Pager.Item next href="#">
                        Next Page &rarr;
                    </Pager.Item>
                </Pager>
                </div>
            </div>
        );
    }
}

export default Footer;