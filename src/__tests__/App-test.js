import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App.js';

describe('App', () => {
    const {asFragment} = render (<App/>)

    it('it renders correctly', () => {
        
        expect(asFragment()).toMatchSnapshot()
    })
})