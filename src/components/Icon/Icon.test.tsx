import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Icon from "./Icon";
import DownloadIcon from "../../assets/icon/download-svgrepo-com.svg";

describe('Icon', () => {
    it('Should render Icon component', () => {
        render(<Icon src={DownloadIcon} />);
        expect(screen.getByRole('img')).toHaveAttribute('src', DownloadIcon);
    });
});