import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home.js';

describe('Home', () => {
    const { asFragment } = render (<Home/>)

    it('renders correctly', () => {

        expect(asFragment()).toMatchSnapshot()
    })
})