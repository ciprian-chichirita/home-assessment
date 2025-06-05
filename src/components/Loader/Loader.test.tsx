import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loader from "./Loader";


describe('Loader', () => {
    it('Should render Loader component', () => {
        render(<Loader />);
        expect(screen.getByRole('heading', { name: 'Loading...' })).toBeInTheDocument();
        // If subtitle is also a heading
        expect(screen.getByText('Please wait while we fetch the data.')).toBeInTheDocument();
    });
});