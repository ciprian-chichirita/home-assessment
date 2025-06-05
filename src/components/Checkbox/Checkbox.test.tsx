import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Checkbox from "./Checkbox";

describe('Checkbox', () => {
    it('Should render Checkbox component', () => {
        render(<Checkbox>checkbox button</Checkbox>);
        expect(screen.getByRole('button', { name: /checkbox button/i })).toBeInTheDocument();
    });
});