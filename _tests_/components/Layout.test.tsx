export {}
import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../../components/Layout';

test("Layout is rendered correctly", () => {
 const layout = renderer.create(<Layout />).toJSON()
 expect(layout).toMatchSnapshot()
})