export {}
import React from 'react';
import renderer from 'react-test-renderer';
import IndexPage from '../../pages/index';

test("Footer is rendered correctly", () => {
 const index = renderer.create(<IndexPage />).toJSON()
 expect(index).toMatchSnapshot()
})