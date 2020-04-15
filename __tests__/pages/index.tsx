import * as React from "react";
import { render } from "@testing-library/react";

import Index from "../../src/pages";

describe(`home screen`, () => {
  describe(`snapshot tests`, () => {
    it(`matches snapshot`, () => {
      const { asFragment } = render(<Index />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
