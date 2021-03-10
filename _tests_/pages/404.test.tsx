export {}
import React from 'react';
import renderer from 'react-test-renderer';
import Custom404 from '../../pages/404';

test("Error page is rendered correctly", () => {
 const errorPage = renderer.create(<Custom404 />).toJSON()
 expect(errorPage).toMatchSnapshot()
})