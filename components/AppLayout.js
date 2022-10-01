import React from 'react'
import PropTypes from 'prop-types';
import Link from 'next/link'
import { Menu, Input, Row, Col } from 'antd';

const AppLayout =({ children }) => {
    return (
        <div>
        <Menu mode='horizontal'>
        <Menu.Item>
            <Link href='/'><a>Node버드</a></Link>
        </Menu.Item>
        <Menu.Item>
            <Link href='/profile'><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
            <Input.Search enterButton style={{ verticalAlign: 'middle'}}></Input.Search>
        </Menu.Item>
        <Menu.Item>
            <Link href='/signup'><a>회원가입</a></Link>
        </Menu.Item>
        </Menu>
        <Row gutter={8}>
            <Col xs={24} md={6}>왼쪽메뉴</Col>
            <Col xs={24} md={12}>{children}</Col>
            <Col xs={24} md={6}><a href='https://github.com/' target='_blank' rel='noreferrer noopener'>안녕하세요</a></Col>
        </Row>
        
        </div>
    );
};


AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;