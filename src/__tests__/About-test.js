import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About.js';

describe('About', () => {

    const {asFragment} = render (<About/>)

    it('it renders correctly', () => {
        
        expect(asFragment()).toMatchSnapshot()
    })
})