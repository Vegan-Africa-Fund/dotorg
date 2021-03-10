export {}
import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';

test("Footer is rendered correctly", () => {
 const footer = renderer.create(<Footer />).toJSON()
 expect(footer).toMatchSnapshot()
})