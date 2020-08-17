import React from 'react';
import { render } from '@testing-library/react';
import SearchResult from '../components/SearchResult';

describe('SearchResult', () => {
    const mockResults = ['firstpic', 'secondpic', 'thirdpic']

    const {asFragment} = render (<SearchResult results={mockResults}/>)

    it('it renders correctly', () => {
        
        expect(asFragment()).toMatchSnapshot()
    })
})