import React from 'react';
import { render } from '@testing-library/react';
import Nav from '../components/Nav';
import { BrowserRouter } from 'react-router-dom';

describe('Nav', () => {

    const {asFragment} = render (
    <BrowserRouter>
    <Nav/>
    </BrowserRouter>)

    it('it renders correctly', () => {
        
        expect(asFragment()).toMatchSnapshot()
    })
})