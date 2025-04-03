import { render, screen, waitFor } from "@testing-library/react";
import AlbumsFavoritosCard from "../components/tabs/albums-favoritos-card";
import '@testing-library/jest-dom';

const mockAlbums = [
  { nome: "Abbey Road", banda: {nome: "The Beatles"}, capa: "url1", nota: 9.5 },
  { nome: "The Dark Side of the Moon", banda: {nome: "Pink Floyd"}, capa: "url2", nota: 9.8 },
];

describe("AlbumsFavoritosCard", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockAlbums),
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("deve exibir os álbuns retornados pela API", async () => {
    render(<AlbumsFavoritosCard />);

    await waitFor(() => {
      expect(screen.getByText("Abbey Road")).toBeInTheDocument();
      expect(screen.getByText("The Beatles")).toBeInTheDocument();
      expect(screen.getByText("The Dark Side of the Moon")).toBeInTheDocument();
      expect(screen.getByText("Pink Floyd")).toBeInTheDocument();
    });
  });
});
